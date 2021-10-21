import '..//item/item.scss'






export const Item = ({id, title, price, image}) => {


    return(
       <div className='container-item' >{id}
           <div className='container-img'>
               <img src={image} alt="" />
           </div>
           <p className='container-titulo'>
               {title}
           </p>
           <p className='container-precio'>
               {price}
           </p>
       </div>

    )

}