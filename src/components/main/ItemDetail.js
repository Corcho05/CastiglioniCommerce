import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../../styles/Item.module.css';
import ItemCount from './ItemCount';
const ItemDetail = ({ guitar, onAdd }) => {

    return (
        <div key={guitar.id} className={styles.contenido}>
            <h3>{guitar.title}</h3>
            <img src={guitar.img} alt={guitar.title} width={150} height={250} />
            <ItemCount
                stock={guitar.stock}
                onAdd={onAdd}
            />
            <Link
                to='/'
                className={styles.btn}
            >Volver</Link>

        </div >
    )
}

export default ItemDetail
