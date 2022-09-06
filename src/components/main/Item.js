import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/Item.module.css';


const Item = ({ product }) => {

    return (
        <div className={styles.guitarra} key={product.id}>
            <img src={product.img} alt={product.title} width={150} height={250} />
            <div className={styles.contenido}>
                <h3>{product.title}</h3>
                <p className={styles.descriptions}>{product.descriptions}</p>
                <p className={styles.price}>$ {product.price}</p>
                <Link
                    to={`/item/${product.id}`}
                    style={{ textDecoration: 'none' }}
                >Ver Detalle</Link>


            </div>
        </div>
    )
}

export default Item
