import { GET_ERROR, GET_REQUEST, GET_SUCCESS } from "../constants/actionConstants";

const intialState = {
    isLoading: false,
    todos: [],
    error: null
}


const todoReducers = (state = intialState, action) => {

    switch (action.type) {
        case GET_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case GET_SUCCESS:
            return {
                isLoading: false,
                todos: action.payload,
                error: null

            }


        case GET_ERROR:
            return {
                isLoading: false,
                todos: [],
                error: action.payload

            }

        default:
            return state;
    }
}



export default todoReducers;