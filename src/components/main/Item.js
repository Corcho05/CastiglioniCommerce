import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/Item.module.css';
const ItemGuitarra = ({ guitar }) => {


    return (
        <div className={styles.guitarra}>
            <img src={guitar.img} alt={guitar.title} width={150} height={250} />
            <div key={guitar.id} className={styles.contenido}>
                <h3>{guitar.title}</h3>
                <p className={styles.descriptions}>{guitar.descriptions}</p>
                <p className={styles.price}>$ {guitar.price}</p>
                <Link
                    to={`/item/${guitar.id}`}
                    className={styles.btn}
                >Ver Detalle</Link>


            </div>
        </div>
    )
}

export default ItemGuitarra
