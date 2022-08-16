import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import logo from '../img/logo.svg';
import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <Router>
            <header className={styles.header}>
                <div className='contenedor'>
                    <div className={styles.barra}>
                        <Link to='/'>
                            <img
                                src={logo}
                                alt="Imagen Logo"
                                width={400}
                                height={100}
                            />
                        </Link>

                        <nav className={styles.navegacion}>
                            <Link to='/'>Inicio</Link>
                            <Link to='/nosotros'>Nosotros</Link>
                            <Link to='/blog'>Blog</Link>
                            <Link to='/tienda'>Tienda</Link>
                        </nav>
                    </div>
                </div>
            </header>
        </Router>
    )
}

export default Header
