use('sorting');
db.createCollection('a1');
db.a1.insertMany([{_id:1, arr:[1,2,3,4]},{_id:2, arr:[1,3,5,7]}]);
db.a1.insertMany([{_id:3, arr:[3,5,4,7]},{_id:4, arr:[10,13,4,7]}]);

//הצגת כל המסמכים
use('sorting');
db.a1.find();

//הצגת כל המסכים שהמערך שלהם מכיל את המספר 1
use('sorting');
db.a1.find({arr: {$in:[1]}});

//מציאת כל המסמכים שמהערך שלהם מכיל את המספר 1 או 3
use('sorting');
db.a1.find({arr:{$in:[1,3]}});

//מציאת כל מסמכים שהמערך שלהם מכיל את המספר 7 וגם את המספר 4
use('sorting');
db.a1.find({arr:{$all:[4,7]}});

//מציאת כל המסמכים שמערך שלהם מכיל מספרים בין 1 ל-5 (כולל הקצוות)
use('sorting');
db.a1.find({arr:{$elemMatch:{$gte:1, $lte:5}}});

