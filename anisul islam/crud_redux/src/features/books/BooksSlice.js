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
        deleteBook:(state,action) =>{
            const id = action.payload;
            state.books = state.books.filter((book)=>book.id !==id)
        }
    }
});

export const {showBooks,addBook,deleteBook} = booksSlice.actions;
export default booksSlice.reducer;