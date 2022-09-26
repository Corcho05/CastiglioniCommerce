import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import Form from './Form';
import useCart from '../../hooks/useCart';
const Cart = () => {
    const [orderId, setOrderId] = useState('');
    const [showForm, setShowForm] = useState(false);
    const { cart, removeItem, clear, getTotalPrice, getTotalItems } = useCart();

    const totalPrice = getTotalPrice();
    const totalItems = getTotalItems();
    const handleid = (idOrder) => {

        setOrderId(idOrder);
        setShowForm(false);
    }
    const handleShowForm = (condition) => {
        setShowForm(condition);
    }

    if (orderId) {
        return (
            <div className="contenedor">
                <h3 className='heading'>Compra realizada con éxito</h3>
                <p>Su id de compra es: {orderId}</p>
                <Link to="/" className="btn btn-primary">Volver al inicio</Link>
            </div>
        )
    }

    if (showForm) {
        return (
            <div className='contenedor'>
                <Form
                    cart={cart}
                    clear={clear}
                    handleId={handleid}
                    handleSowForm={handleShowForm}
                    totalPrice={totalPrice}
                />
            </div>
        )

    }
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
                        <input onClick={() => setShowForm(true)} type='button' value='Finalizar Compra' />


                    </div>}
            </div>

        </Fragment >
    )
}

export default Cart