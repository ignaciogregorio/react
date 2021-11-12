
import { useState } from 'react/cjs/react.development'
import '..//itemList/itemlist.scss'
import  BaseDatos  from "..//..//BaseDatos.json";
import { Loading } from '../Loading/Loading';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';
import { Item } from '../item/Item';




export const Itemlist = ()=>{

    const[productos, setProductos] = useState(null)
    const{category} = useParams()

    useEffect(()=>{

        const task = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(BaseDatos)
            }, 2000);
        })

        task.then(
            (result) =>
                {category?
                setProductos(result.filter(products => products.category === category)): setProductos(result)
            }
        )

    }, [category])



    return(

        <div className='container-itemList'>
            {productos ? productos.map((producto) =>(
                <NavLink className='navlink-item'  to={`/item/${producto.id}`}>
                    <Item
                        id={producto.id}
                        title={producto.title}
                        price={producto.price}
                        image={producto.image}/>
                </NavLink>
            ))  : <Loading/>}

        </div>
    )


}