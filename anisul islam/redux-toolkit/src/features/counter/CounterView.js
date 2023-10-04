import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy5, reset } from './counterSlice';

const CounterView = () => {

    const count  = useSelector((state)=>state.counter.count);
    console.log(count);
    const dispatch = useDispatch()
  return (
      <>
      <div>CounterView</div>
      <h2>Count : {count}</h2>
      <button onClick={()=>{dispatch(increment())}}>Increment</button>
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
      <button onClick={()=>{dispatch(reset())}}>Reset</button>
      <button onClick={()=>{dispatch(incrementBy5(5))}}>Incrementby5</button>
      


    
    </>
  )
}

export default CounterView