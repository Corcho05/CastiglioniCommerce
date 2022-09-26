import React, { useState, useEffect } from 'react'
import carrito from '../img/carrito.png';
import { NavLink } from 'react-router-dom'
import styles from '../styles/Carrito.module.css';
import useCart from '../hooks/useCart';
const CartWidget = () => {
    const { cart } = useCart();
    const [totalItem, setTotalItem] = useState(0);

    useEffect(() => {
        const getTotalItems = () => {
            let total = 0;
            cart.forEach((item) => {
                total += item.quantity;
            });
            setTotalItem(total);
        }
        getTotalItems();
    }, [cart])




    return (
        <div className={styles.wrapper}>
            <ul className={styles.menu}>
                <li className={styles.spanHover} >
                    {cart.length === 0 ? null : <span className={styles.blue}>{totalItem}</span>}
                    <NavLink
                        to='/cart'
                        data-bubble="6"
                        className={({ isActive }) =>
                            isActive ? "active" : undefined
                        }
                    >
                        <img
                            src={carrito}
                            alt="Imagen Carrito"
                            width={30}
                            height={25}
                        />

                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default CartWidget
