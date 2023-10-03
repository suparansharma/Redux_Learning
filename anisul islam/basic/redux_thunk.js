const { default: axios } = require("axios");
const {createStore, applyMiddleware} = require("redux");
const { default: thunk } = require("redux-thunk");


const GET_REQUEST = 'GET_REQUEST';
const GET_SUCCESS = 'GET_SUCCESS';
const GET_FAILED = 'GET_FAILED';
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const initialState = {
    todos: [],
    isLoading: false,
    error: null
}


const getRequest = () => {
    return {
        type: GET_REQUEST
    }
}

const getSuccess = (todos) => {
    return {
        type: GET_SUCCESS,
        payload: todos
    }
}

const getFailed = (error) => {
    return {
        type: GET_FAILED,
        payload: error
    }
}


const reducerR = (state = initialState, action) => {
    switch (action.type) {
        case GET_REQUEST:
            return {
                ...state,
                isLoading: true,
            }


        case GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload

            }


        case GET_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload

            }

        default:
            return state;
    }
}



const fetchData = ()=>{


    return (dispatch)=>{
        dispatch(getRequest());
        axios.get(API_URL)
        .then( res=> {

          const todos =   res.data
          const title = todos.map((todo)=>todo.title)
          dispatch(getSuccess(title))
        })
        .catch(error=> {
          const errorMessage = error.message;
          dispatch(getFailed(errorMessage))
        })
    }



}

const store = createStore(reducerR,applyMiddleware(thunk))

store.subscribe(()=>[
    console.log(store.getState())
])


store.dispatch(fetchData())