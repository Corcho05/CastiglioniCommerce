import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { productsM } from '../../mock/products';
import ItemList from './ItemList';

const ItemListContainer = ({ saludo, addItemsCar }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    //LEO EL PARAMETRO DE LA URL
    const { categoryName } = useParams();

    //Promisse
    useEffect(() => {
        setLoading(true);

        const getProducts = new Promise((res, rej) => {
            setTimeout(() => {
                let productsF = categoryName ? productsM.filter(product => product.category === categoryName) : productsM;
                console.log(productsF)
                res(productsF)
            }, 3000);
        });

        getProducts.then(data => {
            console.log("data", data)

            setLoading(false);
            setProducts(data)
            console.log('products1', products)
        })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                console.log('Finalizó la promesa')
            });

    }, [categoryName])

    return (

        <main className='contenedor'>
            <h3 className='heading'>{saludo}</h3>
            <h3 className='heading'>Nuestros Productos</h3>
            {loading ? <h2>Cargando...</h2>
                : <ItemList
                    products={products}
                    addItemsCar={addItemsCar}

                />
            }

        </main>
    )
}

export default ItemListContainer
