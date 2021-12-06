import '..//item/item.scss'




export const Item = ({id, title, price, image}) => {
    

    return(
        <>
        <div className='item-container'  key={id}>
            <img className='item-img' src={image} alt="" height='500px' />
            <p className='item-titulo'>{title}</p>
            <span className='item-price'>${price}</span>
        </div>
        </>
    )

}