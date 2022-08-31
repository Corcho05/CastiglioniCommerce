import React from 'react'
import styles from '../../styles/Guitarra.module.css';
import ItemCount from './ItemCount';
const ItemDetail = ({ guitar, onAdd, setShowDet }) => {

    return (
        <div key={guitar.id} className={styles.contenido}>
            <h3>{guitar.title}</h3>
            <img src={guitar.img} alt={guitar.title} width={150} height={250} />
            <ItemCount
                stock={guitar.stock}
                onAdd={onAdd}
            />
            <input type="button" value="Volver" onClick={() => setShowDet(false)} />
        </div>
    )
}

export default ItemDetail
