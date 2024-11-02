import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Home from './Component/Hoom/Home';
import DashBoard from './Component/DashBoard/DashBoard';
import BooksDetails from './Component/BooksDetails/BooksDetails';
import BookList from './Component/BookList/BookList';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'books/:bookId',
        element: <BooksDetails></BooksDetails>,
        loader: () => fetch('/booksData.json')
      },
      {
        path: 'bookList',
        element: <BookList></BookList>,
        loader:()=> fetch('/booksData.json')
      },
      {
        path: 'dashboard',
        element: <DashBoard></DashBoard>
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
