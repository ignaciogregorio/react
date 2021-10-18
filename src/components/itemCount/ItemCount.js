import {useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import './itemcount.scss'

export const Itemcount = ({stock, initial})=>{

    const [count, setCount] = useState(parseInt(initial))

    const add = ()=>{setCount(count+1) }
    const rest = ()=>{setCount(count-1) }


    return(
        <div className='contenedor-itemcount'>
                <div className='qty-button'>
                    <i onClick={rest} style={{visibility: count <= 1 ? 'hidden': 'visible'}} className='minus-button'>
                        <FontAwesomeIcon icon={faMinus} />
                    </i>
                    <div>{count}</div>
                    <i onClick={add} style={{visibility: count >= stock ? 'hidden': 'visible'}} className='plus-button'>
                        <FontAwesomeIcon icon={faPlus} />
                    </i>
                </div>
                    <span style={{display: count > stock ? 'block': 'none'}} >Stock Insuficiente. Total Stock del item {stock} </span>
                <div>
                    <button className='add-button'>Agregar Item</button>
                </div>
        </div>

    )
}