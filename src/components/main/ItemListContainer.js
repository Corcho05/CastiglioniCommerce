import React, { useState, useEffect } from 'react'
import { guitarsM } from '../../mock/products';
import ItemListGuitarras from './ItemListGuitarras';

const ItemListContainer = ({ saludo }) => {
    const [guitars, setGuitars] = useState([])
    const [loading, setLoading] = useState(true);
    //Promisse

    //useEffect para actualizar el state de guitars
    useEffect(() => {

        console.log('USEEFECT')
        const getGuitars = new Promise((res, rej) => {
            setTimeout(() => {
                console.log('promise')
                res(guitarsM)
            }, 3000);
        });

        getGuitars.then(data => {
            console.log('then');
            setLoading(false);
            setGuitars(data)
        })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                console.log('Finalizó la promesa')
            });

    }, [])

    return (

        <main className='contenedor'>
            <h1 className='heading'>Nuestra Colección</h1>
            <ItemListGuitarras guitars={guitars} loading={loading} />
        </main>
    )
}

export default ItemListContainer
