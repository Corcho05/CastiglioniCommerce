import React from 'react'
import ItemCount from './ItemCount'
import styles from '../../styles/Guitarra.module.css';
const ItemGuitarra = ({ guitar }) => {
    //función para añadir los items al carrito

    const addItemsCar = (cantidad) => {
        alert(`Has añadido ${cantidad} items al carrito`)
    }

    return (
        <div className={styles.guitarra}>
            <img src={guitar.img} alt={guitar.title} width={150} height={250} />
            <div key={guitar.id} className={styles.contenido}>
                <h3>{guitar.title}</h3>
                <p className={styles.descriptions}>{guitar.descriptions}</p>
                <p className={styles.price}>$ {guitar.price}</p>
                <ItemCount
                    stock={guitar.stock}
                    addItemsCar={addItemsCar}
                />
            </div>
        </div>
    )
}

export default ItemGuitarra
