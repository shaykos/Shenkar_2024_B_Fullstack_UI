
select *
from [dbo].[Customers]

select COUNT(c.CName) as totalCount, c.Ctype
from dbo.Customers as c
group by c.Ctype
order by totalCount

select * from dbo.Orders


select cus.CName, cus.ContactName, cus.Phone 
from dbo.Customers as cus
where cus.CID not in (
    select o.CID 
    from dbo.Orders as o
)

/*
select cus.CName, cus.ContactName, cus.Phone 
from dbo.Customers as cus
where cus.CID = 'VINET'
*/

select * from [dbo].[Order Details] as od

select DISTINCT od.ONum, o.CID, c.CName, c.ContactName, c.Phone,
    sum(od.Quantity * od.UPrice) as 'Before Discount',
    sum(od.Quantity * od.UPrice * (1-od.Discount)) as 'After Discount'  
from 
    [dbo].[Order Details] as od inner join [dbo].[Orders] as o on od.ONum = o.ONum 
    inner join [dbo].[Customers] as c on o.CID = c.CID
group by od.ONum, o.CID, c.CName, c.ContactName, c.Phone

----------

/*
    הנתונים שאותם נרצה להציג תמיד יהיו כתובים בסלקט החיצוני
    דוגמה: 
    יש לכתוב שאילתה שתציג את שמם הלקוח, שם איש הקשר ומספר טלפון
    עבור לקוחות שההנחה שקיבלו גבוהה מ-200 ש״ח
*/


select c.CID, c.CName, c.ContactName, c.Phone
from dbo.Customers as c
where c.CID in (
    select DISTINCT o.CID
    from [dbo].[Order Details] as od inner join [dbo].[Orders] as o on od.ONum = o.ONum 
    group by o.CID
    having sum(od.Quantity * od.UPrice) - sum(od.Quantity * od.UPrice * (1-od.Discount)) > 200
)


/*
    יש 
*/



