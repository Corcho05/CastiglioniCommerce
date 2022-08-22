import React from 'react'
import { Link } from 'react-router-dom'
import stylesH from '../../styles/Header.module.css'
import stylesF from '../../styles/Footer.module.css'
import CartWidget from '../CartWidget';
const NavBar = ({ isFooter }) => {

    return (
        <>
            <nav className={isFooter ? stylesF.navegacion : stylesH.navegacion}>
                <Link to='/'>Inicio</Link>
                <Link to='/nosotros'>Nosotros</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/tienda'>Tienda</Link>
                {isFooter ? null :
                    <CartWidget />
                }
            </nav>
            {isFooter && <p className={stylesF.copyright}>Todos los derechos reservados &copy; </p>}
        </>
    )
}

export default NavBar
