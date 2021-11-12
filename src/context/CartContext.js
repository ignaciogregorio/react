import { createContext, useContext } from "react"
import { useState } from "react/cjs/react.development"


const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({children}) =>{

    const [cart, setCart]= useState([])

    const addItemToCart = (item, quantity) =>{
        const producto = {id: item.id, title: item.title, price: item.price, quantity: quantity, image:item.image}
        isIn(item.id) ?
        alert('producto ya agregado'):
        setCart([...cart, producto])
    }
    const removeItem = (itemId)=>{
        const deleteItem = cart.filter( item => item.id !== itemId)
        setCart(deleteItem)
    }
    const isIn = (id) => cart.some(item => item.id === id)

    console.log(cart)
    return(
        <CartContext.Provider value={{cart, addItemToCart, removeItem, isIn}}>
            {children}
        </CartContext.Provider>
    )
}