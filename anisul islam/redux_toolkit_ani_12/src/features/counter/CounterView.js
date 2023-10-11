import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy5, reset } from './counterSlice';

const CounterView = () => {

    const store = useSelector((state)=>state?.counter.count);
    console.log(store);

    const dispatch = useDispatch();
  return (
      <>
      <div>CounterView</div>
      <h1>Count:{store}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
      <button onClick={()=>dispatch(incrementBy5(5))}>IncrementBy5</button>
    
    </>
  )
}

export default CounterView










