import { useReducer } from 'react';
import './App.css'
import Register from './pages/register/Register';

function App() {

  const initialState = 0;

  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + action.payload.count;
    } else if (action.type === "DECREMENT") {
      return state -  action.payload.count;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {/* <button onClick={() => dispatch({ type: "INCREMENT",payload:{count:5} })} type="button" className="btn btn-primary">INCREMENT</button>
      <h2>{state}</h2>
      <button onClick={() => dispatch({ type: "DECREMENT",payload:{count:5} })} type="button" className="btn btn-secondary">DECREMENT</button> */}
      <Register/>
    </>
  )
}

export default App
