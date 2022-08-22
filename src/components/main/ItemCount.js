import React, { useState } from 'react'
import styles from '../../styles/ItemCount.module.css';
import add from '../../img/add.png'

import remove from '../../img/remove.png'
const ItemCount = () => {
    //Estado para el contador de items
    const [count, setCount] = useState(0)

    //Funcion para aumentar el contador de items
    const suma = () => {
        setCount(count + 1)
    }
    //Funcion para disminuir el contador de items
    const resta = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    //submit para añadir los items al carrito
    const onSubmit = (e) => {
        //Prevenir el comportamiento por defecto del formulario
        e.preventDefault()
        count > 0 ? alert(`Has añadido ${count} items al carrito`) : alert('No has añadido ningún item')
        // alert(`Has añadido ${count} items al carrito`)
    }

    return (
        <div>
            <h1>Desde ItemCount.js</h1>
            <form
                className={styles.formulario}
                onSubmit={onSubmit}
            >
                <label htmlFor="">Cantidad: {count}</label>
                <div className={styles.formInline}>

                    <label ><img alt='Agregar al Carrito' src={remove} onClick={resta} /></label>

                    <label ><img alt='Agregar al Carrito' src={add} onClick={suma} /></label>
                </div>
                <input type='submit' value='Agregar al Carrito' />
            </form>
        </div>
    )
}

export default ItemCount
