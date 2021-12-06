import {useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import './itemcount.scss'



export const Itemcount = ({stock, initial, cantidad})=>{


    const [count, setCount] = useState(parseInt(initial))


    const add = ()=>{
            setCount(count+1)

    }
    const rest = ()=>{
            setCount(count-1)

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
                <div className='qty-button'>
                    <button onClick={onAdd} className='add-button'>Agregar Item</button>
                </div>
        </div>

    )
}