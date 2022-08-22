import React from 'react'
import ItemCount from './ItemCount'
import styles from '../../styles/Listado.module.css';

const ItemListContainer = ({ saludo }) => {
    return (

        <main className='contenedor'>
            <h1 className='heading'>Nuestra Colección</h1>
            <div className={styles.listado}>
                <ItemCount />
            </div>

        </main>
    )
}

export default ItemListContainer
