
import './navbar.scss'
import peakyLogo from '..//..//img/Peaky_Wines2.png'
import { Cartwidget } from '../cartWidget/CartWidget'
import React from 'react';



export const Navbar = () => {



    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-logo'>
                    <img src={peakyLogo} alt=""/>
                </div>
                <ul className='navbar-menu'>
                    <a href="index.html"><li>Home</li></a>
                    <a href="index.html"><li>Nosotros</li></a>
                    <li className='navbar-menu-items'>Productos
                        <ul className='navbar-drowdown'>
                            <li className='navbar-dropdown-items'>Vinos</li>
                            <li className='navbar-dropdown-items'>Whisky</li>
                            <li className='navbar-dropdown-items'>Tabacco</li>
                        </ul>
                    </li>
                    <a href="index.html"><li>Contacto</li></a>
                    <Cartwidget/>
                </ul>
            </nav>
        </div>
    )
}