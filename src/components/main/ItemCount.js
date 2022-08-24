import React, { useState } from 'react'
import styles from '../../styles/ItemCount.module.css';
import add from '../../img/add.png'

import remove from '../../img/remove.png'
const ItemCount = ({ tope, addItemsCar }) => {
    //Estado para el contador de items
    const [count, setCount] = useState(1)

    //Funcion para aumentar el contador de items
    const suma = () => {
        if (count < tope) {
            setCount(count + 1)
        } else {
            alert('Llegó al máximo de items')
        }
    }
    //Funcion para disminuir el contador de items
    const resta = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    //submit para añadir los items al carrito
    const onSubmit = (e) => {
        //Prevenir el comportamiento por defecto del formulario
        e.preventDefault()
        count > 0 ? addItemsCar(count) : alert('No has añadido ningún item')
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
                    <label ><img alt='Restar Cantidad' src={remove} onClick={resta} /></label>
                    <label ><img alt='Sumar Cantidad' src={add} onClick={suma} /></label>
                </div>
                <input type='submit' value='Agregar al Carrito' />
            </form>
        </div>
    )
}

export default ItemCount
