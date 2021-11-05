
import './navbar.scss'
import peakyLogo from '..//..//img/Peaky_Wines2.png'
import { Cartwidget } from '../cartWidget/CartWidget'
import React from 'react';
import { NavLink } from 'react-router-dom';




export const Navbar = () => {





    return (
            <nav className='navbar'>
                <div className='navbar__logo'>
                    <NavLink to={'/'}><img src={peakyLogo} alt=""/></NavLink>
                </div>
                <ul className='navbar__menu'>
                    <li><NavLink className='navbar-li' to='/home' >Home</NavLink></li>
                    <li><NavLink className='navbar-li' to='/nosotros' >Nosotros</NavLink></li>
                    <li className='navbar__menu__items'>Productos
                        <ul className='navbar__drowdown'>
                        <NavLink className="navbar-links" to="/vino"> <li>Vinos</li></NavLink>
                        <NavLink className="navbar-links" to="/whisky"><li>Whisky</li></NavLink>
                        <NavLink className="navbar-links" to="/tabaco"><li>Tabacco</li></NavLink>
                        </ul>
                    </li>
                    <li> <NavLink className='navbar-li' to='/contacto' >Contacto</NavLink></li>
                </ul>
                <Cartwidget/>
            </nav>
    )
}