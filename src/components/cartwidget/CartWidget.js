import './cartwidget.scss'
import carrito from "..//../img/carro.png";


export const Cartwidget = ()=>{

    return(
        <div className='carrito'>
            <img src={carrito} alt="" className='carritoImg' />
        </div>
    )
}