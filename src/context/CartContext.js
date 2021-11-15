import { createContext, useContext } from "react"
import { useState } from "react/cjs/react.development"


const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({children}) =>{

    const [cart, setCart]= useState([])


    const addItemToCart = (item, quantity) =>{
        const producto = {...item, quantity: quantity}

        // comento esto, para trata de hacer funcionar el count en Cart//
/*         isIn(item.id) ?
        alert('producto ya agregado'): */
        setCart([...cart, producto])
    }
    const removeItem = (itemId)=>{
        const deleteItem = cart.filter( item => item.id !== itemId)
        setCart(deleteItem)
    }
    const isIn = (id) => cart.some(item => item.id === id)


    return(
        <CartContext.Provider value={{cart, addItemToCart, removeItem, isIn}}>
            {children}
        </CartContext.Provider>
    )
}