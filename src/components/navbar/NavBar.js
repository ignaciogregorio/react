
import './navbar.scss'
import peakyLogo from '..//..//img/Peaky_Wines2.png'
import { Cartwidget } from '../cartWidget/CartWidget'
import React from 'react';
import { Link } from 'react-router-dom';



export const Navbar = () => {



    return (
            <nav className='navbar'>
                <div className='navbar__logo'>
                    <Link to={'/'}><img src={peakyLogo} alt=""/></Link>
                </div>
                <ul className='navbar__menu'>
                    <li><a href="index.html"> </a> Home</li>
                    <li> <a href="index.html"> </a>Nosotros</li>
                    <li className='navbar__menu__items'>Productos
                        <ul className='navbar__drowdown'>
                            <li className='navbar__dropdown__items'>Vinos</li>
                            <li className='navbar__dropdown__items'>Whisky</li>
                            <li className='navbar__dropdown__items'>Tabacco</li>
                        </ul>
                    </li>
                    <li> <a href="index.html"> </a> Contacto</li>
                </ul>
                <Cartwidget/>
            </nav>
    )
}