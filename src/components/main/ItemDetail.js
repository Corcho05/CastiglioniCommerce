import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from '../../styles/Detail.module.css';
import ItemCount from './ItemCount';
import useCart from '../../hooks/useCart';

const ItemDetail = ({ product }) => {
    //Context para el carrito
    const { addItem } = useCart();

    const [count, setCount] = useState(0);
    //función para añadir los items al carrito
    const onAdd = (cant) => {

        //alert(`Has añadido ${cant} items al carrito`)
        setCount(cant);

        addItem(product, cant);
    }

    return (
        <div key={product.id} className={styles.detail} >
            <img src={product.img} alt={product.title} width={350} height={550} />
            <div className="info">
                <h2>{product.title}</h2>

                <p>{product.descriptions}</p>
                {count === 0
                    ? <ItemCount product={product} stock={product.stock} initial={1} onAdd={onAdd} />
                    : <div><Link to='/cart' style={{ textDecoration: 'none' }}><button>Ir al Carrito</button></Link></div>
                }

                <Link
                    to='/'
                    className={{ textDecoration: 'none' }}
                >Volver</Link>
            </div>
        </div >
    )
}

export default ItemDetail
