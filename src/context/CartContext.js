import { createContext, useContext } from "react"
import { useState } from "react/cjs/react.development"


const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({children}) =>{

    const [cart, setCart]= useState([])

    const addItemToCart = (item) =>{
        setCart([...cart, item])
        console.log(cart)

    }
    const removeItem = (item)=>{
        // remover item del array y setear el cart
    }

    return(
        <CartContext.Provider value={{cart, addItemToCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}