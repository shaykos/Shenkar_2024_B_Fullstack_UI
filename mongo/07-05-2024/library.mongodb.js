const DB_NAME = "library";

use(DB_NAME);

//create collections
db.createCollection("books");
db.createCollection("borrowed");
db.createCollection("customers");
db.createCollection("ordered");

//create book document
let book1 = {
    name: "Harry Potter and the chamber of secrets",
    author: "J.K Rolling",
    chapters: 24, 
    pages: 248,
    publisher: "Y Books"
}

//add the book to the collection
db.books.insertOne(book1);

//add another book
db.books.insertOne({
    name: "The Hobbit",
    author: "JRR Tolkin",
    pages: 680,
});

use("library")
db.books.insertMany([
    {
        name: "book3",
        author: "author 3",
        pages: 680,
    },
    {
        name: "book4",
        author: "author 4",
        pages: 680,
    },
    {
        name: "book5",
        author: "author 5",
        pages: 680,
    },
    {
        name: "book6",
        author: "author 6",
        pages: 680,
    }
]);


