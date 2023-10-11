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
    }
});

export const {showBooks} = booksSlice.actions;
export default booksSlice.reducer;