import React from 'react'
import { Link } from 'react-router-dom'
import stylesH from '../styles/Header.module.css'
import stylesF from '../styles/Footer.module.css'
import carrito from '../img/carrito.png';
const NavBar = ({ isFooter }) => {

    return (
        <>
            <nav className={isFooter ? stylesF.navegacion : stylesH.navegacion}>
                <Link to='/'>Inicio</Link>
                <Link to='/nosotros'>Nosotros</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/tienda'>Tienda</Link>
                {isFooter ? null :
                    <Link to='/contacto'>
                        <img
                            src={carrito}
                            alt="Imagen Carrito"
                            width={30}
                            height={25}
                        />
                    </Link>}
            </nav>
            {isFooter && <p className={stylesF.copyright}>Todos los derechos reservados &copy; </p>}
        </>
    )
}

export default NavBar
