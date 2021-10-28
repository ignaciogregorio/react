
import { useState } from 'react/cjs/react.development'
import '..//itemList/itemlist.scss'
import  BaseDatos  from "..//..//BaseDatos.json";
import { Itemcount } from '../itemCount/ItemCount';
import { Loading } from '../Loading/Loading';




export const Itemlist = ()=>{

    const[productos, setProductos] = useState(null)

    const task = new Promise ((resolve) => {
        setTimeout(() => {
            resolve(BaseDatos)
        }, 4000);
    })

    task.then(
        (result) => {
            setProductos(result)
        }
    )

    return(

        <div className='container-itemList'>
            {productos ? productos.map((producto) =>(
                <div className='itemList-container' key={producto.id}>
                    <img className='itemList-img' src={producto.image} alt="" height='500px' />
                    <p className='itemList-titulo'>{producto.title}</p>
                    <span className='itemList-price'>${producto.price}</span>
                    <Itemcount stock = {producto.stock} initial='1' />
                </div>
            ))  : <Loading/>}

        </div>
    )


}