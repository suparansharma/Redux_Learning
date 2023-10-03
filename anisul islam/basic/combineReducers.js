const {createStore, combineReducers} = require("redux");


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


//Cart
const ADD_CART = 'ADD_CART';
const GET_CARTS = 'GET_CARTS';

const initialCartState = {
    carts:["a","b","c"],
    count:3
}


const addCartCounter = (value)=>{
    return{
        type: ADD_CART,
        payload:value,
    }
}


const getCarts = () =>{
    return{
        type:GET_CARTS
    }
}

const cartReducer = (state=initialCartState,action) =>{
    switch (action.type) {
        case ADD_CART:
            return{
                carts:[...state.carts, action.payload],
                count:state.count+1
            }

            case GET_CARTS:
                return{
                    ...state
                }
    
        default:
            return state;
    }
}


const reducerR = combineReducers({
    productR : productReducer,
    cartR :cartReducer
})


const store = createStore(reducerR);
store.subscribe(()=>[
    console.log(store.getState())
])

store.dispatch(addProductCounter("new"))
store.dispatch(getProductCounter())

store.dispatch(addCartCounter("d"))
store.dispatch(getCarts())