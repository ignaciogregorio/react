
import { NavLink } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import { useCart } from '../../context/CartContext'
import { Itemcount} from '../itemCount/ItemCount'
import { Loading } from '../Loading/Loading'
import './itemDetail.scss'


export const ItemDetail = ({item} ) =>{

    const {addItemToCart} = useCart()

    const [qtyitems, setQtyitems] = useState(0)
    const [flag, setFlag] = useState(true)

    const agrego = (counter) => {
        setQtyitems(counter)
        setFlag(false)
    }

    return(
        <>
        {item ?  <div className='itemDetail-container' key={item.id}>
            <img className='itemDetail-img' src={item.image} alt="" />
            <div className='itemDetail-description'>
                    <div className='itemDetail-title'>{item.title}</div>
                    <div>${item.price}</div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis rem doloribus dolorum eius possimus voluptates reiciendis velit repellendus quasi placeat ad nesciunt voluptas accusantium, suscipit quam! Impedit numquam non ratione.</p>
                    {flag ? <Itemcount initial='0' stock={item.stock} cantidad={agrego}/> :
                    <div className='itemDetail-add'>
                        <span>HAS AGREGADO {qtyitems} items de {item.title}</span>
                        <NavLink onClick={addItemToCart} className='itemDetail-buttons' to='/cart'>Finalizar Compra</NavLink>
                        <NavLink className='itemDetail-buttons' to='/'>Seguir Comprando</NavLink>
                    </div>
                    }
            </div>
        </div> : <div className='itemDetal-loading'><Loading/></div> }
        </>
    )

}