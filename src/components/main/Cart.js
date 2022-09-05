import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../../styles/Item.module.css';
const Cart = () => {
    return (
        <>
            <div>
                Desde Cart.js
            </div>
            <div>
                <Link
                    to='/'
                    className={styles.btn}
                >Volver</Link>
            </div>
        </>
    )
}

export default Cart