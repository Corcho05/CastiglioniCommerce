import React, { useState, useEffect } from 'react'
import styles from '../../styles/ItemCount.module.css';
import add from '../../img/add.png'

import remove from '../../img/remove.png'
const ItemCount = ({ stock, onAdd }) => {
    //Estado para el contador de items
    const [count, setCount] = useState(1)

    //Funcion para aumentar el contador de items
    const suma = () => {
        if (count < stock) {
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
        count > 0 ? onAdd(count) : alert('No has añadido ningún item')
        // alert(`Has añadido ${count} items al carrito`)
    }
    useEffect(() => {
        if (stock === 0) setCount(0)
    }, [stock])


    return (

        <form
            className={styles.formulario}
            onSubmit={onSubmit}
        >
            <label htmlFor="">Cantidad: {count}</label>
            <div className={styles.formInline}>
                <label ><img alt='Restar Cantidad' src={remove} onClick={resta} /></label>
                <label ><img alt='Sumar Cantidad' src={add} onClick={stock === 0 ? () => alert("No hay stock") : suma} /></label>
            </div>
            {stock === 0 ? <p>No hay stock</p> : <input type="submit" value="Añadir al carrito" />}

        </form>

    )
}

export default ItemCount
