
import { useCart } from '../../context/CartContext'
import { Itemcount } from '../itemCount/ItemCount'
import './cart.scss'


export const Cart = () =>{

    const {cart, removeItem } = useCart()

    const totalPago = cart.reduce((total, item) => {
        return total + item.price * item.quantity
    },0)



    return(
        <>
            {
                cart.length !== 0 ?

                cart.map((item) =>(
                    <>
                    <article className='cart-item-container' >
                            <div className='cart-image-container'>
                                <img className='cart-image' src={item.image} alt="" />
                            </div>
                            <div className='cart-info'>
                                <div>{item.title}</div>
                                <div>x {item.quantity}</div>
                                <div>${item.price * item.quantity} </div>
                            </div>
                            <div className='cart-buttons'>
                                <Itemcount initial={item.quantity} showBtn={false}/>
                                <button onClick={()=>(removeItem(item.id))}>Eliminar</button>
                            </div>
                    </article>
                    <hr />
                    </>
                ) ):
                <div className='cart-message'>
                    <p>No hay Items en el Carrito</p>
                </div>
            }
                {cart.length !== 0 ?
                    <div className='cart-total' >
                        <h2>Total a Pagar: ${totalPago}</h2>
                    </div>
                    : <button>Volver al Inicio</button>
                }
        </>
    )
}