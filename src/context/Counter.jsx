import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppProvider = (props) => {
    const [count, setCount] = useState(0);
    const [items, setItems] = useState([])
    return (
        <AppContext.Provider
            value={{ count, setCount, items, setItems }}
        >

            {props.children}

        </AppContext.Provider>
    )
}