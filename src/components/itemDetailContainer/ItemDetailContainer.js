import { useState } from 'react/cjs/react.development'
import './itemDetailContainer.scss'
import  BaseDatos  from "..//..//BaseDatos.json";
import { ItemDetail } from '../itemDetail/ItemDetail';
import { useEffect } from 'react';



export const ItemDetailContainer = () => {


        const[item, setItem] = useState()


        useEffect(()=>{
            const loadJson = new Promise ((resolve)=>{
                setTimeout(() => {
                    resolve(BaseDatos)
                }, 2000)
            })

            loadJson.then(
                (res) => {
                    setItem(res[0])
                }
            )

        },[])

    return(
        <div>
            <ItemDetail item={item}/>
        </div>
    )

}