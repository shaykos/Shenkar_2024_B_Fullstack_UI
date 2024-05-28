//נעבור אל מסד הנתונים
use('shenkar');
//נמחק את האוסף
db.kiwi.drop();
//ניצור את האוסף מחדש
db.createCollection('kiwi');
//נוסיף נתונים
db.kiwi.insertMany([
    { "name": "bob", "status": "P" },
    { "name": "sue", "age": 19, "status": "P" },
    { "name": "ben", "status": "A" },
    { "name": "bob", "status": "P" },
    { "name": "pola", "status": "A" },
    { "name": "ruth", "age": 21, "status": "B" }
]);

//שליפת כל הנתונים
db.kiwi.find();

//נבצע עדכון
//הוספת שדה למסמך מסוים
use('shenkar');
db.kiwi.updateMany({name:'bob'},{$set:{age:50}});
db.kiwi.find({name:'bob'});