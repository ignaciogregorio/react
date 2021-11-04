import { useState } from 'react/cjs/react.development'
import './itemDetailContainer.scss'
import  BaseDatos  from "..//..//BaseDatos.json";
import { ItemDetail } from '../itemDetail/ItemDetail';
import { useEffect } from 'react';
import { useParams } from 'react-router';



export const ItemDetailContainer = () => {


        const[item, setItem] = useState()
        const {id} = useParams()


        useEffect(()=>{
            const loadJson = new Promise ((resolve)=>{
                setTimeout(() => {
                    resolve(BaseDatos)
                }, 2000)
            })

            loadJson.then(
                (res) => {
                    setItem(res.filter(product => product.id === id))
                }
            )

        },[id])


        console.log(item)
    return(
        <div>
            <ItemDetail item={item}/>
        </div>
    )

}