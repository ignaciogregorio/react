
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
                    <li><NavLink className='navbar-li' to='/vinos' >Vinos</NavLink></li>
                    <li><NavLink className='navbar-li' to='/whisky' >Whisky</NavLink></li>
                    <li><NavLink className='navbar-li' to='/tabacco' >Tabacco</NavLink></li>
                </ul>
                <Cartwidget/>
            </nav>
    )
}