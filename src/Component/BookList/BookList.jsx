import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreListAdd } from '../Utility/Ulity';
import Book from '../Book/Book';

const BookList = () => {

    const allBooks = useLoaderData()
    const [readList, setReadList] = useState([])

    useEffect(() => {
         const getReadList = getStoreListAdd()
         console.log('load',getReadList);
         console.log('al',allBooks);
         const getReadListInt = getReadList.map(id => parseInt(id))
          
         const addReadList = allBooks.filter(book => getReadListInt.includes(book.bookId))
     console.log('add',addReadList);
     setReadList(addReadList)
    },[])
    return (
        <div>
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