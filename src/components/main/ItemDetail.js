import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from '../../styles/Detail.module.css';
import ItemCount from './ItemCount';
const ItemDetail = ({ guitar }) => {
    const [count, setCount] = useState(0);
    //función para añadir los items al carrito
    const onAdd = (cant) => {

        //alert(`Has añadido ${cant} items al carrito`)
        setCount(cant);
    }

    return (
        <div key={guitar.id} className={styles.detail} >
            <img src={guitar.img} alt={guitar.title} width={350} height={550} />
            <div className="info">
                <h2>{guitar.title}</h2>

                <p>{guitar.descriptions}</p>
                {count === 0
                    ? <ItemCount stock={guitar.stock} initial={1} onAdd={onAdd} />
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
