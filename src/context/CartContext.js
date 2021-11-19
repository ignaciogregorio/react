import { createContext, useContext } from "react"
import { useState } from "react/cjs/react.development"


const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({children}) =>{

    const [cart, setCart]= useState([])


    const addItemToCart = (item, quantity) =>{
        const isInCart = cart.some((product) => product.id === item.id)


        // comento esto, para trata de hacer funcionar el count en Cart//
        if(!isInCart){
            const producto = {...item, counter: quantity}
            setCart([...cart, producto])
        }else{
            const newCart = [...cart]
            const duplicado =  cart.find((product) => product.id === item.id)

            duplicado.counter = duplicado.counter + quantity
            setCart([...newCart])
        }
    }
    
    console.log(cart)
    const removeItem = (itemId)=>{
        const deleteItem = cart.filter( item => item.id !== itemId)
        setCart(deleteItem)
    }


    return(
        <CartContext.Provider value={{cart, addItemToCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}