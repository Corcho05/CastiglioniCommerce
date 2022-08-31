import React from 'react'

import styles from '../../styles/Guitarra.module.css';
const ItemGuitarra = ({ guitar, setShowDetail }) => {


    return (
        <div className={styles.guitarra}>
            <img src={guitar.img} alt={guitar.title} width={150} height={250} />
            <div key={guitar.id} className={styles.contenido}>
                <h3>{guitar.title}</h3>
                <p className={styles.descriptions}>{guitar.descriptions}</p>
                <p className={styles.price}>$ {guitar.price}</p>
                <input type="button" value="Ver Detales" onClick={() => setShowDetail(true)} />
            </div>
        </div>
    )
}

export default ItemGuitarra
