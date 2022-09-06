import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../../styles/Item.module.css';
import useCart from '../../hooks/useCart';
const Cart = () => {
    const { cart } = useCart();
    console.log(cart);
    return (


        <div className={styles.cart}>
            <h2>Carrito de compras</h2>
            <div className={styles.cart__items}>
                {
                    cart.length === 0
                        ?
                        <di>
                            <h3>No hay items en el carrito</h3>
                            <Link to='/' style={{ textDecoration: 'none' }}><button>Ir a la tienda</button></Link>
                        </di>

                        : cart.map((item) => (

                            <div key={item.id} className={styles.cart__item}>
                                <img src={item.item.img} alt={item.item.title} width={100} height={150} />
                                <div className={styles.cart__itemInfo}>
                                    <h3>{item.item.title}</h3>
                                    <p>{item.item.descriptions}</p>
                                    <p>Precio: ${item.item.price}</p>
                                    <p>Cantidad: {item.quantity}</p>
                                    <p>Total: ${item.item.price * item.quantity}</p>
                                </div>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default Cart