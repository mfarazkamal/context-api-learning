import { useContext } from 'react'
import { AppContext } from '../context/Counter'

const Item = ({name, price}) => {
  const {items, setItems} = useContext(AppContext)
  console.log(items)
  return (
    <div className='bg-neutral-400 px-6 py-4 rounded-sm shadow-sm'>
        <h4 className='font-bold lg:text-3xl text-xl uppercase'>{name}</h4>
        <p className='text-xl text-red-800 font-semibold text-right my-8'>Price <span className='bg-red-900 text-white px-2 py-1 rounded text-lg'>{price} INR</span></p>
        <button 
          className='bg-red-800 text-white px-5 py-1 rounded w-full'
          onClick={()=>setItems([...items, {name:name, price:price}])}
          >
            Add to Cart</button>
    </div>
  )
}

export default Item