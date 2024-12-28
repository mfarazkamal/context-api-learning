import { useContext } from 'react'
import { AppContext } from '../context/Counter';

const Counter = () => {
  const {count, setCount} = useContext(AppContext);
  return (
    <div className='flex gap-4'>
        <button onClick={() => setCount(count + 1)} className='bg-blue-700 px-5 py-1 rounded hover:bg-orange-700'>Increment</button>
        <button onClick={() => setCount(count - 1)}  className='hover:bg-blue-700 px-5 py-1 rounded bg-orange-700'>Decrement</button>
    </div>
  )
}

export default Counter