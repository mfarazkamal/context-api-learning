import { useContext } from "react"
import { AppContext } from "../context/Counter"

const Cart = () => {
  const { items, setItems } = useContext(AppContext)
  const total = items.reduce((a,b)=> a+b.price,0)
  return (
    <div className="">
      <h1>CART</h1>
      <p>Total Items: {items.length}</p>
      {
        items && items.map((item) => <p key={Math.random()}>{item.name} -- {item.price}</p>)
      }
      <p>Net Amount: {total} INR</p>
    </div>
  )
}

export default Cart