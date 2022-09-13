import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from '../../styles/Spinner.module.css';


import useCart from '../../hooks/useCart';
const Cart = () => {
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [buyer, setBuyer] = useState({
        name: '',
        email: '',
        telephone: ''
    })

    const { cart, removeItem, clear, getTotalPrice, getTotalItems, sendOrders } = useCart();
    const { name, email, telephone } = buyer;
    const totalPrice = getTotalPrice();
    const totalItems = getTotalItems();
    const purchase = () => {
        setLoading(true);
        // const buyer = {
        //     name: 'Juan',
        //     phone: '123456789',
        //     email: 'seba@seba.com'
        // }
        sendOrders(buyer);
        setLoading(false);
    }
    const onSubmitOrder = e => {
        e.preventDefault();
        if ([name, email, telephone].includes('')) {
            alert('Todos los campos son obligatorios');
            return;
        }
        //console.log('buyer', buyer);
        purchase(buyer);
        setBuyer({
            name: '',
            email: '',
            telephone: ''
        })
        setShowForm(false);

    }
    return (

        <Fragment>
            <div className='contenedor'>
                <h3 className='heading'>Carrito de compras</h3>
                {showForm && <div className='contenedor'>
                    <h3>Formulario de compra</h3>
                    <form onSubmit={onSubmitOrder}>
                        <input
                            type="text"
                            placeholder='Nombre'
                            name='name'
                            value={name}
                            onChange={e => setBuyer({ ...buyer, [e.target.name]: e.target.value })}
                        />
                        <input
                            type="number"
                            placeholder='Teléfono'
                            name='telephone'
                            value={telephone}
                            onChange={e => setBuyer({ ...buyer, [e.target.name]: e.target.value })}
                        />
                        <input
                            type="email"
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={e => setBuyer({ ...buyer, [e.target.name]: e.target.value })}
                        />
                        <button type='submit'>Comprar</button>
                        <button type='button' onClick={() => setShowForm(false)}>Cancelar</button>
                    </form>
                </div>}

                {loading && <h2 className={styles.loader}>Cargando...</h2>}
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
                        <input onClick={() => setShowForm(true)} type='button' value='Finalizar Compra' />


                    </div>}
            </div>

        </Fragment >
    )
}

export default Cart