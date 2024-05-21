//"הצגת כל המסמכים הקיימים באוסף "ספרים
use('library');
db.books.find();

//הצגת שמות הספרים בלבד
//מוצגת באופן אוטומטי _id התכונה
use('library');
db.books.find({}, { name: 1 });

//_id הצגת שם הספר בלבד ללא התכונה 
use('library');
db.books.find({}, { name: 1, _id: 0 });

//הצגת רק ספר אחד מתוך האוסף
use('library');
db.books.find({}, { name: 1, _id: 0 }).limit(1);

//JRR Tolkin הצגת כל הספרים שנכתבו בידי 
use('library');
db.books.find({ author: "JRR Tolkin" });

//JRR Tolkin הצגת כל הספרים שנכתבו בידי 
//_id ללא התכונה 
use('library');
db.books.find({ author: "JRR Tolkin" }, { _id: 0 });

//הצגת כל הספרים שיש להם 680 עמודים
use('library');
db.books.find({ pages: 680 });

//הצגת כל הספרים שיש להם פחות מ-680 עמודים
use('library');
db.books.find({ pages: { $lt: 680 } });

//הצגת כל הספרים שיש להם לפחות 680 עמודים
use('library');
db.books.find({ pages: { $gte: 680 } });

//chapters הצגת כל הספרים שיש להם את התכונה 
use('library');
db.books.find({ chapters: { $exists: true } });