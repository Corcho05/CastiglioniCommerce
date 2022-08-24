import React, { useState } from 'react'
import ItemCount from './ItemCount'
import styles from '../../styles/Listado.module.css';

const ItemListContainer = ({ saludo }) => {
    //función para añadir los items al carrito
    const addItemsCar = (cantidad) => {
        alert(`Has añadido ${cantidad} items al carrito`)
    }

    return (

        <main className='contenedor'>
            <h1 className='heading'>Nuestra Colección</h1>
            <div className={styles.listado}>
                <ItemCount
                    tope={10}
                    addItemsCar={addItemsCar}
                />
            </div>

        </main>
    )
}

export default ItemListContainer
