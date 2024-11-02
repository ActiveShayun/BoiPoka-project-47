import { useEffect } from "react";
import { useState } from "react";
import { json } from "react-router-dom";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch("/booksData.json")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <h3 className="text-3xl font-bold text-center">Books</h3>
            <p className="text-center text-xxl">{books.length}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>

        </div>
    );
};

export default Books;