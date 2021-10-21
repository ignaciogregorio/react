
import { useState } from 'react/cjs/react.development'
import '..//itemList/itemlist.scss'
import  BaseDatos  from "..//..//BaseDatos.json";




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
            {productos && productos.map((producto) =>(
                <div>
                    <img src={producto.image} alt="" />
                    <h1>{producto.title}</h1>
                    <span>{producto.price}</span>

                </div>
            ))}
        </div>
    )


}