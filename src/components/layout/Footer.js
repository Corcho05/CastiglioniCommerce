import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import styles from '../../styles/Footer.module.css'
import NavBar from '../layout/NavBar'
const Footer = () => {
    return (

        <footer className={styles.footer}>
            <div className={`contenedor ${styles.contenido}`}>
                <NavBar
                    isFooter={true}
                />
            </div>
        </footer>

    )
}

export default Footer
