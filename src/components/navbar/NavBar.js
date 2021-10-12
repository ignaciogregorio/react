
import './navbar.scss'
import peakyLogo from '..//..//img/Peaky_Wines2.png'
import hamburLogo from '..//..//img/menu.png'
import { Cartwidget } from '../cartwidget/CartWidget'




export const Navbar = () => {



    return (
        <div>
            <nav className='peakyNav'>
                <div className='peakyLogo'>
                    <img src={peakyLogo} alt=""/>
                </div>
                <div className='peakyTitle'>
                    <h1>Peaky Wines</h1>
                    <h3>Tu E-commerce de Bebidas</h3>
                    <img src={hamburLogo} alt=""/>
                </div>
                <ul className='peakyMenu'>
                    <a href="index.html"><li>Home</li></a>
                    <a href="index.html"><li>Nosotros</li></a>
                    <li className='peakyMenu__Productos'>Productos
                        <ul className='peakyDropdown'>
                            <li className='subMenu'>Vinos</li>
                            <li className='subMenu'>Whisky</li>
                            <li className='subMenu'>Tabacco</li>
                        </ul>
                    </li>
                    <a href="index.html"><li>Contacto</li></a>
                    <Cartwidget/>
                </ul>
            </nav>
        </div>
    )
}