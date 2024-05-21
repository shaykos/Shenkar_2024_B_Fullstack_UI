use('sorting');
db.createCollection('grades');
db.grades.insertMany([
    { "_id": 1, "semester": 1, "grades": [70, 87, 90] },
    { "_id": 2, "semester": 1, "grades": [90, 88, 92] },
    { "_id": 3, "semester": 1, "grades": [85, 100, 90] },
    { "_id": 4, "semester": 1, "grades": [70, 77, 60] },
    { "_id": 5, "semester": 2, "grades": [90, 88, 92] },
    { "_id": 6, "semester": 2, "grades": [65, 70, 90] }
]);


//
use('sorting');
db.grades.find({ semester: 1, grades: { $gte: 85 } }, { "grades.$": 1 });