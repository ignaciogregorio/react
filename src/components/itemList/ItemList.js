
import { useState } from 'react/cjs/react.development'
import '..//itemList/itemlist.scss'
import { Loading } from '../Loading/Loading';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';
import { Item } from '../item/Item';
import { collection, getDocs, getFirestore, query, where } from '@firebase/firestore';




export const Itemlist = ()=>{

    const[productos, setProductos] = useState(null)
    const{categoryid} = useParams()

    useEffect(()=>{

        const db = getFirestore()

        // si existe la categoria, que filtre, sino que traiga todo
        const q = categoryid ? query(
            collection(db, "items"),
            where("category", "==", categoryid),)

            : collection(db, "items")

            getDocs(q).then((snapshot) =>{
                setProductos(
                    snapshot.docs.map((doc)=>{
                        const newDoc = { ...doc.data(), id: doc.id}
                        return newDoc
                    })
                )
            })
    },[categoryid])




    return(

        <div className='container-itemList'>
            {productos ? productos.map((producto) =>(
                <NavLink className='navlink-item' key={producto.id}  to={`/item/${producto.id}`}>
                    <Item
                        id={producto.id}
                        title={producto.title}
                        price={producto.price}
                        image={producto.image}/>
                </NavLink>
            ))  : <div className='loader-container'><Loading/></div>}
        </div>
    )


}