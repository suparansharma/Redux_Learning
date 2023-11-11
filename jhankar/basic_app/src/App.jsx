

import { useReducer } from 'react';
import './App.css'

function App() {

  const initialState = 0;

  const reducer = (state,action)=>{
    if (action.type === "INCREMENT") {
      return state + 1;
    }else if (action.type === "DECREMENT") {
      return state - 1;
    }
  }

  const [state,dispatch] = useReducer(reducer,initialState);

  return (
    <>
<button onClick={()=>dispatch({type:"INCREMENT"})} type="button" className="btn btn-primary">INCREMENT</button>
<h2>{state}</h2>
<button onClick={()=>dispatch({type:"DECREMENT"})} type="button" className="btn btn-secondary">DECREMENT</button>
    </>
  )
}

export default App
