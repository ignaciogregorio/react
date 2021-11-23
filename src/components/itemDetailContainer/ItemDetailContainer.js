/* import { useState } from 'react/cjs/react.development */
import './itemDetailContainer.scss'
import { ItemDetail } from '../itemDetail/ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getFirestore } from "..//..//firebase";
import {doc, getDoc} from '@firebase/firestore';



export const ItemDetailContainer = () => {


        const[item, setItem] = useState(null)
        const {itemid} = useParams()

        useEffect(()=>{
            // cargo y le paso el ID
            const db = getFirestore()
            const oneItem = doc(db, 'items' , itemid )


//SIMULO RETRASO PARA USAR LOADER//
            setTimeout(() => {
                getDoc(oneItem).then((snapshot) => {

                    if (snapshot.exists()){
                        setItem(snapshot.data(),)
                    }
                })
                
            }, 1000);

            
        }, [itemid])

    return(
        <div>
            <ItemDetail item={item} />
        </div>
    )

}