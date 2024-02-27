/*

שאילתות
----------
select שליפת מידע מתוך הטבלאות השונות באמצעות משפט 
משפט זה בנוי כך:
    select column1, column2, ....
    from table_name
    where some_condition
    go

סדר הפעולות שמסד הנתונים מבצע:
1) from - גש לטבלה הרצויה
2) where - תסנן משם את הנתונים
3) select - תציג את מה שביקשתי

*/

-- להציג את כל המוצרים
select *
from Products
go


-- לכל המוצרים שבמבצע יש להציג את קוד המוצר, שמם, המחיר המלא ומחיר המבצע
select product_id, product_name, product_price, product_sale_price 
from Products
where product_sale_price < product_price
go

-- לכל המוצרים שכמות המלאי הקיימת נמוכה מכמות המלאי המינימלית יש להציג את קוד המוצר ושמם וכמות מינימלית ונוכחית
select product_id, product_name, product_min_amount, product_stock
from Products
where product_stock < product_min_amount

