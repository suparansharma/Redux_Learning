import {applyMiddleware, createStore} from 'redux'
import todosReducers from './services/reducers/todosReducer'
import thunk from 'redux-thunk'
const store  = createStore(todosReducers,applyMiddleware(thunk));


export default store;