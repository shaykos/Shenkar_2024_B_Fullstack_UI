use Store
go

/*

Insert
--------
פקודה להזנה נתונים בתוך הטבלה
    insert into table_name(table_col1, table_col2, ....)
        values(val1, val2, ....)
    go

Update
---------
עדכון נתונים בתוך הטבלה
כאשר מעדכנים רשומה בטבלה יש לשמור על המבנה הבא: 
    update table_name
        set 
            column_name = some_value,
            column_name = some_value
            ...
        where column_pk = some_value
    go

Delete
---------
מחיקת נתונים מתוך הטבלה
    delete from table_name
        where column_pk = some_value
    go

*/

-- מחיקת כל הרשומות בטבלה
-- delete from Clients

insert into Clients([client_email],[client_name],[client_phone],[client_img],[client_date_of_birth],[client_password],[client_address_city],[client_address_street],[client_address_appartment])
    values('kuku@gmail.com','kuku choen','054-1111111','http://wwww.google.com/img.jpg', '1990-12-24', '1234', 'here', 'there', 9)

insert into Clients([client_email],[client_name],[client_phone],[client_img],[client_date_of_birth],[client_password],[client_address_city],[client_address_street],[client_address_appartment])
    values('momo@gmail.com','momo zamir','054-111','http://wwww.google.com/img.jpg', '1990-10-24', '333333', 'here', 'there', 8)

insert into Clients([client_email],[client_name],[client_phone],[client_img],[client_date_of_birth],[client_password],[client_address_city],[client_address_street],[client_address_appartment])
    values('momo2@gmail.com','momo zamir','054-111','http://wwww.google.com/img.jpg', '1990-10-24', '333333', 'here', 'there', 8)
go

-- מחיקת רשומה 
delete from Clients 
    where client_email = 'momo2@gmail.com' -- the same as IF(client_email == 'momo@gmail.com') in C#
go

-- עדכון רשומה 
update Clients
    set client_phone = '050-9123456'
    where client_email = 'momo@gmail.com'
go

-- עדכון של כמה שדות
update Clients 
    set 
        client_address_city = 'Tel Aviv',
        client_address_street = 'Namir blv.',
        client_address_appartment = 72
    where client_email = 'kuku@gmail.com'
go

insert into Products([product_name],[product_short_desc],[product_img],[product_min_amount],[product_stock],[product_price],[product_sale_price])
    values('item 1', 'desc item 1', 'img item 1', 4, 8, 12.5, 12.5)

insert into Products([product_name],[product_short_desc],[product_img],[product_min_amount],[product_stock],[product_price],[product_sale_price])
    values
            ('item 2', 'desc item 2', 'img item 2', 5, 8, 10, 10),
            ('item 3', 'desc item 3', 'img item 3', 2, 8, 125, 125),
            ('item 4', 'desc item 4', 'img item 4', 9, 8, 120.90, 110),
            ('item 5', 'desc item 5', 'img item 5', 14, 10, 2.5, 1.5),
            ('item 6', 'desc item 6', 'img item 6', 84, 100, 78.40, 70)
go