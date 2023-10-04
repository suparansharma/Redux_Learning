import { applyMiddleware, createStore } from 'redux'
import todoReducers from './Services/reducers/todosReducers'
import thunk from 'redux-thunk'


const store = createStore(todoReducers, applyMiddleware(thunk));

export default store;