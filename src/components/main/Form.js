import React, { useState } from 'react'
import styles from '../../styles/Spinner.module.css';
import { collection, getFirestore, addDoc } from 'firebase/firestore';

const Form = ({ cart, clear, handleId, handleSowForm, totalPrice }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [buyer, setBuyer] = useState({
        name: '',
        email: '',
        telephone: ''
    })
    const { name, email, telephone } = buyer;

    const sendOrders = (buyer) => {

        const newCart = cart.map((cartItem) => {
            return {
                id: cartItem.id,
                title: cartItem.title,
                quantity: cartItem.quantity,
                price: cartItem.price,
            }
        });

        const newOrder = {
            buyer: buyer,
            items: newCart,
            total: totalPrice,
        };

        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');

        addDoc(ordersCollection, newOrder)
            .then(({ id }) => handleId(id))
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false);
                clear();
            });

    };

    const purchase = () => {
        setLoading(true);

        sendOrders(buyer);


    }

    const onSubmitOrder = e => {

        e.preventDefault();
        if ([name, email, telephone].includes('')) {
            setError(true);
            return;
        }
        setLoading(true);


        purchase(buyer);

        setBuyer({
            name: '',
            email: '',
            telephone: ''
        })


    }
    const cancel = () => {
        handleId('');
        handleSowForm(false);
    }
    const handleChange = e => {
        setError(false);
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }
    return (
        <>
            {error && <div className='contenedor'><p style={{
                border: '1px solid black',
                padding: '4px',
                margin: '4px',
                borderRadius: '8px',
                color: 'red',
            }}>Todos los campos son obligatorios!!</p></div>}
            {loading ? <h2 className={styles.loader}>Cargando...</h2> :
                <>
                    <h3>Formulario de compra</h3>
                    <form onSubmit={onSubmitOrder}>
                        <input
                            type="text"
                            placeholder='Nombre'
                            name='name'
                            value={name}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            placeholder='Teléfono'
                            name='telephone'
                            value={telephone}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={handleChange}
                        />
                        <button type='submit'>Comprar</button>
                        <button type='button' onClick={cancel}>Cancelar</button>
                    </form>
                </>
            }
        </>
    )
}

export default Form