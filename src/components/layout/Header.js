import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import logo from '../../img/logo.svg';
import styles from '../../styles/Header.module.css'
import NavBar from '../layout/NavBar';

const Header = () => {
    return (
        <>
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
                            <NavBar
                                isFooter={false}
                            />

                        </div>
                    </div>
                </header>
            </Router>
        </>
    )
}

export default Header
