import { Link } from 'react-router-dom'
import './cartwidget.scss'
import { useCart } from '../../context/CartContext'



export const Cartwidget = ()=>{

    const {cart } = useCart()

    const totalItem = cart.reduce((total, item)=>{
        return total + item.quantity
    },0)

    return(
        <Link to='/cart'>
        <div className='carrito'>
            <span className='total-items'>{totalItem}</span>
            <i className="icon"></i>
        </div>
        </Link>
    )
}