import { useCart } from '../../context/CartContext'
import './cart.scss'


export const Cart = () =>{

    const {cart, removeItem } = useCart()


    return(
        <>
            <table className='cart-table'>
                <tr className='cart-header'>
                    <td>Imagen</td>
                    <td>Cantidad</td>
                    <td>Nombre</td>
                    <td>Precio</td>
                </tr>
            </table>


            {cart.map((item) =>(
                <>
                <tr className='cart-info'>
                    <td><img src={item.image} alt="" height='50px' /></td>
                    <td>{item.quantity}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td><button onClick={()=>(removeItem(item.id))}>X</button></td>
                </tr>

                </>

            ) )}

        </>
    )
}