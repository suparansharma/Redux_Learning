import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPosts = createAsyncThunk("posts/fetchPosts",async()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
})

const postSlice = createSlice({
    name:'posts',
    initialState:{
        isLoading:false,
        posts:[],
        error:null
    },
    extraReducers:(builder)=>{

    }
})