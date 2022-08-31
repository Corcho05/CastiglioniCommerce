import React, { useState, useEffect } from 'react'
import { guitarsM } from '../../mock/products';
import ItemListGuitarras from './ItemListGuitarras';

const ItemListContainer = ({ saludo, addItemsCar, setShowDetail }) => {
    const [guitars, setGuitars] = useState([])
    const [loading, setLoading] = useState(true);
    //Promisse

    useEffect(() => {


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
            <h3 className='heading'>Nuestra Colección</h3>
            {loading ? <h2>Cargando...</h2>
                : <ItemListGuitarras
                    guitars={guitars}
                    addItemsCar={addItemsCar}
                    setShowDetail={setShowDetail}
                />
            }

        </main>
    )
}

export default ItemListContainer
