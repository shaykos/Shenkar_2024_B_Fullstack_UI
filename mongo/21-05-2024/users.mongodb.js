//הזנת נתונים לאוסף הלקוחות במאגר הספריה
use('library');
db.customers.insertMany([
    { "name": "sue", "age": 19, "status": "P" },
    { "name": "pol", "age": 22, "status": "A" },
    { "name": "lulu", "age": 20 },
    { "name": "ben", "status": "A" },
    { "name": "dan", "age": 35 },
    { "name": "hila", "age": 23, "status": "A" },
    { "name": "hila", "age": 23, "status": "A" },
    { "name": "frank", "age": 19 },
    { "name": "pola", "status": "A" }
]);

//A הצגת כל הלקוחות שגילם מעל 20 וגם בעלי סטטוס 
//!!כתיב מקוצר - מועדף
use('library');
db.customers.find({ age: { $gt: 20 }, status: "A" });

//A הצגת כל הלקוחות שגילם מעל 20 וגם בעלי סטטוס 
//כתיב מלא
use('library');
db.customers.find({ $and: [{ age: { $gt: 20 }, status: "A" }] });