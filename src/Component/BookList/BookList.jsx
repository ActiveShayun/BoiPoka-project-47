import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreListAdd } from '../Utility/Ulity';
import Book from '../Book/Book';

const BookList = () => {

    const allBooks = useLoaderData()
    const [readList, setReadList] = useState([])
    const [sort, setSort] = useState('')

    useEffect(() => {
        const getReadList = getStoreListAdd()
        console.log('load', getReadList);
        console.log('al', allBooks);
        const getReadListInt = getReadList.map(id => parseInt(id))

        const addReadList = allBooks.filter(book => getReadListInt.includes(book.bookId))
        console.log('add', addReadList);
        setReadList(addReadList)
    }, [])


    const handleSortBy = (sort) => {
        setSort(sort)
        if (sort === 'No of pages') {
            const sortReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages)
            setReadList(sortReadList)
        }
        else if(sort === 'Ratings'){
            const sortReadList = [...readList].sort((a, b) => a.rating - b.rating)
            setReadList(sortReadList)
        }

    }
    return (
        <div>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                    {sort ? `sort by : ${sort}` : 'sort by'}</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleSortBy('Ratings')}><a>Ratings</a></li>
                    <li onClick={() => handleSortBy('No of pages')}><a>No of pages</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read list</Tab>
                    <Tab>Wish list</Tab>
                </TabList>

                <TabPanel>
                    <h2>I read books {readList.length}</h2>
                    {
                        readList.map(book => <Book book={book}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>My wish list</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default BookList;