import {useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import './itemcount.scss'
import { useCart } from '../../context/CartContext'



export const Itemcount = ({stock, initial, cantidad, item, showBtn = true})=>{

    const {addItemToCart } = useCart()
    const [count, setCount] = useState(parseInt(initial))


    const add = ()=>{
        if(showBtn){
            setCount(count+1)
        }else{
            addItemToCart(item, 1)
        }
    }
    const rest = ()=>{
        if(!showBtn){
            setCount(count-1)
        }else{
            addItemToCart(item, -1)
        }
    }

    const onAdd = () => {
        cantidad(count)
    }

    return(
        <div className='contenedor-itemcount'>
            <p>Seleccione Cantidades</p>
                <div className='qty-button'>
                    <i onClick={rest} style={{visibility: count <= 1 ? 'hidden': 'visible'}} className='minus-button'>
                        <FontAwesomeIcon icon={faMinus} />
                    </i>
                    <div>{count}</div>
                    <i onClick={add} style={{visibility: count >= stock ? 'hidden': 'visible'}} className='plus-button'>
                        <FontAwesomeIcon icon={faPlus} />
                    </i>
                </div>
                <div>
                    {showBtn &&
                    <button onClick={onAdd} className='add-button'>Agregar Item</button>
                    }
                </div>
        </div>

    )
}