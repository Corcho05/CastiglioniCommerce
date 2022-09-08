import React from 'react'
import { NavLink } from 'react-router-dom'
import stylesH from '../../styles/Header.module.css'
import stylesF from '../../styles/Footer.module.css'
import CartWidget from '../CartWidget';
import useCart from '../../hooks/useCart';
const NavBar = ({ isFooter }) => {
    const { cart } = useCart();
    return (
        <>
            <nav className={isFooter ? stylesF.navegacion : stylesH.navegacion}>
                <NavLink to='/'>Inicio</NavLink>
                <NavLink to='/category/Guitarra'>Guitarras</NavLink>
                <NavLink to='/category/Curso'>Cursos</NavLink>

                {isFooter ? null :
                    cart.length === 0 ? null : <CartWidget />

                }
            </nav>
            {isFooter && <p className={stylesF.copyright}>Todos los derechos reservados &copy; </p>}

        </>
    )
}

export default NavBar
