import { createContext, useContext } from "react"
import swal from 'sweetalert';
import { useState } from "react/cjs/react.development"


const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({children}) =>{

    const [cart, setCart]= useState([])


    const addItemToCart = (item, quantity) =>{
        const isInCart = cart.some((product) => product.id === item.id)

        if(!isInCart){
            const producto = {...item, counter: quantity}
            setCart([...cart, producto])
        }else{
            const newCart = [...cart]
            const duplicado =  cart.find((product) => product.id === item.id)
            duplicado.counter = (duplicado.counter + quantity)
            if (duplicado.counter > item.stock){
                swal('Stock insuficiente', 'se agrego el maximo de unidades disponibles','warning')
                duplicado.counter = item.stock
            }
            setCart([...newCart])
        }
    }

    const cleanCart = () =>{
        setCart([])
    }
    const removeItem = (itemId)=>{
        const deleteItem = cart.filter( item => item.id !== itemId)
        setCart(deleteItem)
    }

    const totalPago = cart.reduce((total, item) => {
        return total + item.price * item.counter
    },0)


    return(
        <CartContext.Provider value={{cart, addItemToCart, removeItem, cleanCart, totalPago}}>
            {children}
        </CartContext.Provider>
    )
}