import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import stylesC from '../../styles/Cart.module.css'
import stylesB from '../../styles/Button.module.css'

import useCart from '../../hooks/useCart';
const Cart = () => {
    const { cart, removeItem, clear, getTotalPrice, getTotalItems } = useCart();
    const totalPrice = getTotalPrice();
    const totalItems = getTotalItems();
    return (

        <Fragment>
            <div className='contenedor'>
                <h3 className='heading'>Carrito de compras</h3>

                {
                    cart.length === 0
                        ?
                        <div className='info'>
                            <h3>No hay items en el carrito</h3>
                            <Link to='/' style={{ textDecoration: 'none' }}><button>Ir a la tienda</button></Link>
                        </div>

                        : cart.map((item) => (

                            <div key={item.id} style={{
                                border: '1px solid black',
                                borderRadius: '8px',
                                display: 'flex',
                                justifyContent: 'space-around',
                                padding: '8px',
                                margin: '8px',
                            }} >
                                <img src={item.img} alt={item.title} width={100} height={150} />
                                <div className='info'>
                                    <h3>{item.title}</h3>

                                    <p>Precio: ${item.price}</p>
                                    <p>Cantidad: {item.quantity}</p>

                                    <button onClick={() => removeItem(item.id)}>Eliminar</button>
                                </div>
                            </div>

                        ))
                }
                {cart.length === 0
                    ? null
                    : <div style={{
                        border: '1px solid black',
                        borderRadius: '8px',
                        display: 'flex',
                        justifyContent: 'space-around',
                        padding: '8px',
                        margin: '8px',
                    }}>
                        <p>Total Items: {totalItems} </p>
                        <p>Total: $ {totalPrice}</p>
                        <input onClick={clear} type='button' value='Vaciar carrito' />
                    </div>}
            </div>

        </Fragment >
    )
}

export default Cart