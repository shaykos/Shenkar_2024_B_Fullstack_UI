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

אילוצים
---------
תנאים שאפשר לשים בשדות על מנת לוודא שהכל יהיה תקין
not null - מכריח את השדה שלא יהיה ריק 
default - מגדיר ערך ברירת מחדל במידה ולא הוזן ערך כלל
check - כתיבת תנאי להזנה של ערך תקין
unique - מחייב שערך השדה יהיה ייחודי, ללא חזרות בטבלה
*/

-- קם קיימת טבלה בשם הזה והיוזר יצר אותה אז תמחק. אחרת תיצור
if object_id('dbo.Products', 'U') is not null
    drop table Products
else
    create table Products(
        product_id int not null unique,
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




