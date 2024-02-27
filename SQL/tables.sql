/*
create database Store
go
use Store
go
*/

/*
פקודות לעבודה על אובייקיטים (טבלאות)
-------------------------------------
Create, Alter, Drop

פקודות לעבודה על רשומות
------------------------
Insert, Update, Delete

סוגי משתנים
-------------------
int - מספר שלם
decimal(n,m) - ספרות אחרי הנקודה m תווים כאשר n מספר עשרוני המכיל 
    decimal(5,2) -- השדה יכיל 5 תווים המייצגים מספר עשרוני כאשר 2 תווים הם אחרי הנקודה העשרונית 73.22
float - מספר עשרוני רגיל
char(n) - !תווים לטיניים בדיוק n שדה המכיל 
varchar(n) - תווים לטיניים n שדה המכיל עד
nchar(n) - !תווים בדיוק n שדה המכיל 
nvarchar(n) - תווים n שדה המכיל עד
text - שדה המכיל עד 2 מיליארד תווים לטיניים
ntext - שדה המכיל עד 2 מיליארד תווים 
bit - שדה בוליאני המכיל 0 או 1 בלבד 
date - תאריך --> YYYY-MM-DD
datetime - תאריך ושעה --> YYYY-MM-DD H:M:S:z

אילוצים
---------
תנאים שאפשר לשים בשדות על מנת לוודא שהכל יהיה תקין
not null - מכריח את השדה שלא יהיה ריק 
default - מגדיר ערך ברירת מחדל במידה ולא הוזן ערך כלל
check - כתיבת תנאי להזנה של ערך תקין
unique - מחייב שערך השדה יהיה ייחודי, ללא חזרות בטבלה

מפתח ראשי
---------
אילוץ המכריח את השדה עליו הוא פועל להיות חד =חד ערכי, כלומר לא ריק וללא חזרות כלל בטבלה
לכל טבלה חייב להיות מפתח ראשי
id (pk) |    name
-------------------
   1    |    kuku
-------------------
   1    |    momo
:יהיה מפתח ראשי והטבלה תראה כך id לא יכול להיות לקוח עם אותו מזהה ולכן השדה 
id (pk) |    name
-------------------
   1    |    kuku
-------------------
   2    |    momo

מפתח ראשי יכול להיות מורכב משדה אחד או יותר
primary key על מנת להגדיר מפתח ראשי בטבלה נשתמש באילוץ

פונקציות מובנות
----------------
getdate() -- מחזירה את התאריך הנוכחי

year(תאריך), month(תאריך), day(תאריך) - מחזירות את החלק היחסי בתאריך שנשלח

datediff(part, date1, date2) -- מחדירה את ההפרש בימים או חודשים או שנים בין 2 תאריכים
    part => year, day, month

indentity(start_value, jump_units) -- 
    פונקציה עבור מספרים שלמים בלבד.
    jump_units וקופץ כל פעם ב start_value מגדירה מספר רץ המתחיל ב 
    ex: identity(1,1) -> 1, 2, 3, 4, 5, 6...
        identity(1,10) -> 1, 11, 21, 31...
        identity(10,10) -> 10, 20, 30, 40...

*/

-- קם קיימת טבלה בשם הזה והיוזר יצר אותה אז תמחק. אחרת תיצור
if object_id('dbo.Products', 'U') is not null
    drop table Products
else
    create table Products(
        product_id int identity(1,1) primary key,
        product_name nvarchar(120) not null unique,
        product_short_desc nvarchar(250) not null,
        product_long_desc ntext,
        product_img varchar(max) not null,
        product_min_amount int not null default 1,
        product_stock int not null,
        product_price float not null, 
        product_sale_price float not null,
        product_available bit default 1 -- 1 = TRUE
    )
go

if object_id('dbo.Clients', 'U') is not null
    drop table Clients
else
    create table Clients(
        client_email varchar(100) primary key,
        client_name varchar(50) not null,
        client_phone char(11) not null,
        client_img varchar(max) not null,
        client_date_of_birth date, 
        client_password varchar(16) not null,
        client_address_city nvarchar(25) not null,
        client_address_street nvarchar(25) not null,
        client_address_appartment int not null,
        client_available bit default 1,

        -- constraint שם האילוץ check(תנאי)
        constraint age check(year(getdate()) - year(client_date_of_birth) >= 18)
        --constraint age2 check(datediff(year, getdate(), client_date_of_birth) >= 18)
    )
go



