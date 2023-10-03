const {createStore} = require("redux");

const INCREMENT = 'INCREMENT';
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
const INCREMENT_BY_USER = 'INCREMENT_BY_USER';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const initialState = {
    count: 0,
    users:['x']
}


const incrementCounter =()=> {
    return{
        type: INCREMENT,
    }
}

const decrementCounter  =()=> {
    return{
        type: DECREMENT,
    }
}

const resetCounter  =()=> {
    return{
        type: RESET,
    }
}


const counterIncrementByValue  =(value)=> {
    return{
        type: INCREMENT_BY_VALUE,
        payload:value
    }
}


const counterIncrementByUser  =(user)=> {
    return{
        type: INCREMENT_BY_USER,
        payload:user
    }
}


const reducerCounter = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }

            case INCREMENT_BY_VALUE:
                return {
                    ...state,
                    count: state.count + action.payload
                }

                case INCREMENT_BY_USER:
                    return {
                        users:[...state.users,action.payload],
                        count: state.count + 1
                    }

        case RESET:
            return {
                count: 0
            }


        default:
            state;
    }
}


const store = createStore(reducerCounter);

store.subscribe(()=>{
    console.log(store.getState());
})

// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(counterIncrementByValue(10))
store.dispatch(counterIncrementByUser('y'))
store.dispatch(counterIncrementByUser('z'))