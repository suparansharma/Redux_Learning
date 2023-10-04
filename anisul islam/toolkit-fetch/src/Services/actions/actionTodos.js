import axios from "axios";
import { GET_ERROR, GET_REQUEST, GET_SUCCESS } from "../constants/actionConstants"

export const getAllTodos = () => async (dispatch) => {
    dispatch({ type: GET_REQUEST });
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        dispatch({ type: GET_SUCCESS, payload: res.data })

    } catch (error) {
        dispatch({ type: GET_ERROR, payload: error.message })
    }
}