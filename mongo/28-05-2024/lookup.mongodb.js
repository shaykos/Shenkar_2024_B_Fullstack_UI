use('bookStore');

db.createCollection('books');
db.books.insertMany([
    {
        "isbn": "978-3-16-148410-0",
        "title": "Some cool book",
        "author": "John Doe"
    },
    {
        "isbn": "978-3-16-148999-9",
        "title": "Another awesome book",
        "author": "Jane Roe"
    }
]);

db.createCollection('books_selling_data');
db.books_selling_data.insertMany([
    {
        "isbn": "978-3-16-148410-0",
        "copies_sold": 12500
    },
    {
        "isbn": "978-3-16-148999-9",
        "copies_sold": 720050
    },
    {
        "isbn": "978-3-16-148999-9",
        "copies_sold": 1000
    }
]);


//הצגת כל מכירות הספרים
use('bookStore');
db.books.aggregate([
    {
        $lookup: {
            from: 'books_selling_data',
            localField: 'isbn',
            foreignField: 'isbn',
            as: 'sold_copies'
        }
    }
])









/*

db.books.aggregate([{
    $lookup: {
            from: "books_selling_data",
            localField: "isbn",
            foreignField: "isbn",
            as: "copies_sold"
        }
}])



*/