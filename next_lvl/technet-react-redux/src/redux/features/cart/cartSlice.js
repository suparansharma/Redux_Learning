import { createSlice } from "@reduxjs/toolkit";
import {IProduct} from "../../../types/globalTypes.ts"


interface Icart{
    products :IProduct[]
}

const initialState : Icart ={
    products:[],
}

const cartSlice = createSlice({
name:'cart',
initialState,
reducers:{}
})


export default cartSlice.reducer;