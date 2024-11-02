import { useLoaderData, useParams } from "react-router-dom";
import { getMarkAsReadAddList } from "../Utility/Ulity";

const BooksDetails = () => {

    const { bookId } = useParams()
    const id = parseInt(bookId)
    console.log('params', bookId);
    const data = useLoaderData()
    console.log('data', data, id);

    const book = data.find(book => book.bookId === id)
    console.log('book', book);
    const {bookName,image,review} = book

    const handleMarkAsRead = (id)=>{
        getMarkAsReadAddList(id)
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row items-start">
                <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p className="py-6">
                        {review}
                    </p>
                    <button onClick={() => handleMarkAsRead(bookId)}
                    className="btn btn-primary">mark as read</button>
                </div>
            </div>
        </div>
    );
};

export default BooksDetails;