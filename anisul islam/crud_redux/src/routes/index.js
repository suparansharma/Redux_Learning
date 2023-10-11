
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Error from '../pages/Error'
import Navbar from '../layouts/Navbar'
import BooksView from '../features/books/BooksView'
import AddBook from '../features/books/AddBook'

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Navbar/>

    <main>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add-book' element={<AddBook/>} />
        <Route path='/show-books' element={<BooksView/>} />
        <Route path='*' element={<Error/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </main>
    </BrowserRouter>
  )
}

export default AppRoutes
