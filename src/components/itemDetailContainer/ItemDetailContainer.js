import { useState } from 'react/cjs/react.development'
import './itemDetailContainer.scss'
import  BaseDatos  from "..//..//BaseDatos.json";
import { ItemDetail } from '../itemDetail/ItemDetail';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { getFirestore } from "..//..//firebase";
import { doc, getDoc} from '@firebase/firestore';



export const ItemDetailContainer = () => {


        const[item, setItem] = useState()
        const {id} = useParams()

// probando firebase
/*         useEffect(()=>{

            const db = getFirestore()
            const oneItem = doc(db, "items", id)

            getDoc(oneItem).then((snapshot) =>{
                if(snapshot.exists()){
                    setItem(
                    snapshot.data())}
                    })

            },[id]) */


        useEffect(()=>{
            const loadJson = new Promise ((resolve)=>{
                setTimeout(() => {
                    resolve(BaseDatos)
                }, 2000)
            })

            loadJson.then(
                (res) => {
                    setItem(res.find(product => product.id === id))
                }
            )

        },[id])


    return(
        <div>
            <ItemDetail item={item} />
        </div>
    )

}