import { useContext } from "react"
import Counter from "./components/Counter"
import { AppContext } from './context/Counter'
import Item from "./components/Item";
import Cart from "./components/Cart";

const App = () => {
  const { count } = useContext(AppContext);
  return (
    <>
      <div className="min-h-screen bg-zinc-800 text-white flex-wrap flex gap-5 justify-center items-center">
        <Item name="Addidas Shoes" price={70} />
        <Item name="Finger Keyboard" price={450} />
        <Item name="Keyboard & Mouse" price={700} />
        <Item name="64GB KingsTon USB" price={560} />
        <Cart/>
      </div>

      <div id="Counter-App" className="min-h-screen bg-zinc-900 text-white flex flex-col gap-3 justify-center items-center">
        <h1 className="lg:text-3xl text-xl bg-slate-500 px-6 py-3 rounded">Count is {count}</h1>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    </>
  )
}

export default App