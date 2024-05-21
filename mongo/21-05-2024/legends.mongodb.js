use('legends');
db.createCollection('unicorns');
db.unicorns.insertOne({ name: 'Aurora', dob: new Date(1991, 0, 24, 13, 0), loves: ['carrot', 'grape'], weight: 450, gender: 'f', vampires: 43 });
db.unicorns.insertOne({ name: 'Unicrom', dob: new Date(1973, 1, 9, 22, 10), loves: ['energon', 'redbull'], weight: 984, gender: 'm', vampires: 182 });
db.unicorns.insertOne({ name: 'Roooooodles', dob: new Date(1979, 7, 18, 18, 44), loves: ['apple'], weight: 575, gender: 'm', vampires: 99 });
db.unicorns.insertOne({ name: 'Solnara', dob: new Date(1985, 6, 4, 2, 1), loves: ['apple', 'carrot', 'chocolate'], weight: 550, gender: 'f', vampires: 80 });
db.unicorns.insertOne({ name: 'Ayna', dob: new Date(1998, 2, 7, 8, 30), loves: ['strawberry', 'lemon'], weight: 733, gender: 'f', vampires: 40 });
db.unicorns.insertOne({ name: 'Kenny', dob: new Date(1997, 6, 1, 10, 42), loves: ['grape', 'lemon'], weight: 690, gender: 'm', vampires: 39 });

use('legends');
db.createCollection('unicorns');
db.unicorns.insertOne({ name: 'Loren', dob: new Date(1997, 6, 1, 10, 42), loves: ['grape', 'lemon'], weight: 690, gender: 'f', vampires: 0 });
db.unicorns.insertOne({ name: 'Orlando', dob: new Date(2000, 4, 5, 16, 37), loves: ['grape', 'apple'], weight: 300, gender: 'm' });

//הצגת כל הזכרים
use('legends');
db.unicorns.find({ gender: 'm' });

//הצגת כל הזכרים ששוקלים לפחות 700 קילו
use('legends');
db.unicorns.find({ gender: 'm', weight: { $gte: 700 } });

//רשימת חדי הקרן שלא חיסלו אף ערפד
use('legends');
db.unicorns.find(
    {
        $or: [
            { vampires: { $exists: false } },
            { vampires: 0 }
        ]
    }
);

//רשימת הבנות שאוהבות לאכול תפוחי עץ
use('legends');
db.unicorns.find({ gender: 'f', loves: "apple" });

//רשימת הבנות שאוהבות לאכול תפוחי עץ - כתיב מלא
use('legends');
db.unicorns.find({ gender: 'f', loves: { $in: ['apple'] } });

//רשימת הבנות שלא אוהבות לאכול תפוחי עץ - כתיב מלא
use('legends');
db.unicorns.find({ gender: 'f', loves: { $nin: ['apple'] } });

//כל הבנות שאוהבות לאכול תפוחי עץ או שוקלות פחות מ-500 קילו
use('legends');
db.unicorns.find(
    {
        gender: 'f',
        $or: [
            { loves: 'apple'},
            { weight: {$lt: 500}}
        ]
    }
);

//להציג כמה בנות יש
use('legends');
db.unicorns.find({gender:'f'}).count();