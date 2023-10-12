import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { updateBook } from './BooksSlice';

const EditBook = () => {
  const location = useLocation();
  console.log(location);
  const [id,setId] = useState(location.state.id);
  const [name,setName] = useState(location.state.name);
  const [author,setAuthor] = useState(location.state.author);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(updateBook({id,name,author}));
    navigate("/show-books",{replace:true})
  }
  return (
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
      Update Book
    </button>
  </form>
  )
}

export default EditBook