import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from './BooksSlice';
import {useNavigate } from 'react-router-dom'

const AddBook = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const numberOfBooks = useSelector((state)=>state.booksReducer.books.length);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const book = {id:numberOfBooks+1,name,author};
    dispatch(addBook(book));
    navigate("/show-books",{replace:true})
  }
  return (
    <>
      <div>AddBook</div>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="author">author</label>
          <input
            type="text"
            name="author"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">
          Add Book
        </button>
      </form>

    </>
  )
}

export default AddBook