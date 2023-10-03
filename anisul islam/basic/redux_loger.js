const {createStore, combineReducers, applyMiddleware} = require("redux");
const { default: logger } = require("redux-logger");


//Product
const ADD_PRODUCT = "ADD_PRODUCT";
const GET_PRODUCTS = "GET_PRODUCTS";

const initialState = {
    products:["salt","sugger"],
    count:2
}



const addProductCounter = (product) =>{
    return{
        type:ADD_PRODUCT,
        payload:product,
    }
}


const getProductCounter = () =>{
    return{
        type:GET_PRODUCTS
    }
}



const productReducer =(state=initialState,action)=>{
switch (action.type) {
    case ADD_PRODUCT:
        return {
            products:[...state.products,action.payload],
            count:state.count + 1
        }

        case GET_PRODUCTS:
            return {
                ...state
            }
    default:
        return state;
}
}


const store = createStore(productReducer,applyMiddleware(logger));
store.subscribe(()=>[
    console.log(store.getState())
])

store.dispatch(addProductCounter("new"))
store.dispatch(getProductCounter())