
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/features/counter/counterSlice';
function App() {
  const {count} = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
    <div>
      <button
        aria-label="Increment value"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>

      <button
        aria-label="Increment value"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={() => dispatch(incrementByAmount(5))}
      >
        IncrementBy5
      </button>
      <span className="text-xl font-semibold">{count}</span>
      <button
        aria-label="Decrement value"
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  </div>
  
  )
}

export default App
