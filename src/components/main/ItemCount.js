import React, { useState, useEffect } from 'react'
import styles from '../../styles/ItemCount.module.css';
import add from '../../img/add.png'

import remove from '../../img/remove.png'
const ItemCount = ({ product, stock = 1, initial = 1, onAdd, added }) => {

    //Estado para el contador de items
    const [count, setCount] = useState(initial)
    const [stockCount, setStockCount] = useState(stock)


    useEffect(() => {
        setCount(initial)
    }, [initial])

    useEffect(() => {
        setStockCount(stock)
    }, [stock])

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
            style={{
                border: '1px solid black',
                width: 250,
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'space-around',
                padding: '3px',
                margin: '4px',
            }}
        >
            <p style={{ padding: '3px', }}><label htmlFor="">Cantidad: {count}</label></p>

            <div className={styles.formInline} style={{ padding: '3px', }}>
                <label className={styles.labelFormInline}><img alt='Restar Cantidad' src={remove} onClick={resta} /></label>
                <label ><img alt='Sumar Cantidad' src={add} onClick={stock === 0 ? () => alert("No hay stock") : suma} /></label>
            </div>
            {added > 0
                ? <p style={{
                    border: '1px solid #e99401',
                    borderRadius: '8px',
                    margin: '8px',
                    padding: '1px',
                }}>
                    <label htmlFor="">Agregados al carrito : {added}</label></p>
                : null}
            {stock === 0 ? <p>No hay stock</p> : <input type="submit" value="Añadir al carrito" />}

        </form>

    )
}

export default ItemCount
