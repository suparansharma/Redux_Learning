import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import postReducer from "../features/posts/postSlice";

const store  = configureStore({
    reducer:{
        counter: counterSlice,
        posts:postReducer
    }
})

export default store;