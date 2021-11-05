import { Link } from 'react-router-dom'
import { Itemcount } from '../itemCount/ItemCount'
import { Loading } from '../Loading/Loading'
import './itemDetail.scss'

export const ItemDetail = ({item} ) =>{




    return(
        <>
        <Link to={"/"}><button>Back</button></Link>
        {item ?  <div className='itemDetail-container' key={item.id}>
            <img className='itemDetail-img' src={item.image} alt="" />
            <div className='itemDetail-description'>
                    <div className='itemDetail-title'>{item.title}</div>
                    <div>${item.price}</div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis rem doloribus dolorum eius possimus voluptates reiciendis velit repellendus quasi placeat ad nesciunt voluptas accusantium, suscipit quam! Impedit numquam non ratione.</p>
                    <div>Stock Disponible: {item.stock}</div>
                    <Itemcount initial='0' stock={item.stock}/>
            </div>
        </div> : <div className='itemDetal-loading'><Loading/></div> }

        </>
    )

}