const {createStore} = require("redux");





// defining constants

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';
const RESET = 'RESET';




// state
const initialCounterState = {
    count: 0,
}

const initialUserState = {
    users: [{
        name: "Mr x"
    }],
}



// action - object - type,payload


const incrementCounter = () => {
    return {
        type: INCREMENT,
    };
};


const decrementCounter = () => {
    return {
        type: DECREMENT,
    };
};

const resetCounter = () => {
    return {
        type: RESET,
    };
};


const addUser = () => {
    return {
        type: ADD_USER,
        payload: { name: 'Mr y' }
    };
};


const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
            case RESET:
                return {
                    ...state,
                    count: 0
                };
        default:
            state;
    }
}




// 1.state
// 2.dispatch action
// 3.reducer-----for update
// 4.store - getState(),dipatch(),subscribe()



const store = createStore(counterReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

// dispatch action
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())
store.dispatch(resetCounter())