import { createSlice } from "@reduxjs/toolkit"

const initialBooks = {
    books :[
        {id:1,name:"Bangla",author:"Writer"},
        {id:2,name:"English",author:"Writer"},
    ]
}


export const booksSlice = createSlice({
    name : 'books',
    initialState:initialBooks,
    reducers:{
        showBooks:(state)=>state,
        addBook:(state,action) =>{
            state.books.push(action.payload)
        },
        updateBook:(state,action) =>{
           const {id,name,author} = action.payload;
           const isBookExit = state.books.filter((book)=>book.id === id)
           if (isBookExit) {
            isBookExit[0].name = name;
            isBookExit[0].author = author;
           }
        },
        deleteBook:(state,action) =>{
            const id = action.payload;
            state.books = state.books.filter((book)=>book.id !==id)
        }
    }
});

export const {showBooks,addBook,deleteBook,updateBook} = booksSlice.actions;
export default booksSlice.reducer;