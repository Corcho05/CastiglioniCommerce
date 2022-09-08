import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import styles from '../../styles/Item.module.css';
import stylesC from '../../styles/Cart.module.css'
import useCart from '../../hooks/useCart';
const Cart = () => {
    const { cart, removeItem } = useCart();

    return (

        <Fragment>
            <div className='contenedor'>
                <h3 className='heading'>Carrito de compras</h3>

                {
                    cart.length === 0
                        ?
                        <div>
                            <h3>No hay items en el carrito</h3>
                            <Link to='/' style={{ textDecoration: 'none' }}><button>Ir a la tienda</button></Link>
                        </div>

                        : cart.map((item) => (

                            <div key={item.id} className={stylesC.guitarra}>
                                <img src={item.img} alt={item.title} width={100} height={150} />
                                <div className={styles.cart__itemInfo}>
                                    <h3>{item.title}</h3>

                                    <p>Precio: ${item.price}</p>
                                    <p>Cantidad: {item.quantity}</p>
                                    <p>Total: ${Number.parseFloat(item.price * item.quantity)}</p>
                                    <button onClick={() => removeItem(item.id)}>Eliminar</button>
                                </div>
                            </div>
                        ))
                }
            </div>
        </Fragment>
    )
}

export default Cart