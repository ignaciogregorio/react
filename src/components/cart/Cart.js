
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import './cart.scss'


export const Cart = () =>{

    const {cart, removeItem, totalPago } = useCart()




    return(
        <>
            {
                cart.length !== 0 ?

                cart.map((item) =>(

                    <div key={item.id} >
                    <article  className='cart-item-container'>
                            <div className='cart-image-container'>
                                <img className='cart-image' src={item.image} alt="" />
                            </div>
                            <div className='cart-info'>
                                <div>{item.title}</div>
                                <div>x {item.counter}</div>
                                <div>${item.price * item.counter} </div>
                            </div>
                            <div className='cart-buttons'>
                                <button onClick={()=>(removeItem(item.id))}>Eliminar</button>
                            </div>
                    </article>
                    <hr />
                    </div>
                ) ):
                <div className='cart-message'>
                    <p>No hay Items en el Carrito</p>
                </div>
            }
                {cart.length !== 0 ?
                    <div className='cart-total' >
                        <h2>Total a Pagar: ${totalPago}</h2>
                        <Link to='/checkout' className='button-end-buy'><button >Finalizar Compra</button></Link>
                    </div>
                    : <Link to='/' className='cart-button-back-home'><button>Volver al Inicio</button></Link>
                }

        </>
    )
}