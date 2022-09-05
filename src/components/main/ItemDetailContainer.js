import React, { useEffect, useState } from 'react'
import { productsM } from '../../mock/products';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [guitar, setGuitar] = useState({})
    const [loading, setLoading] = useState(true);
    //LEO EL PARAMETRO DE LA URL
    const { idItem } = useParams();

    //Promisse

    useEffect(() => {
        setLoading(true);

        const getProducts = new Promise((res, rej) => {
            setTimeout(() => {
                let productF = productsM.find(product => product.id === Number(idItem));
                res(productF)
            }, 3000);
        });

        getProducts.then(data => {


            setGuitar(data)
            setLoading(false);
        })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                console.log('Finalizó la promesa')
            });

    }, [idItem])


    return (
        <div >
            {
                loading ? <h2>Cargando...</h2>
                    : <ItemDetail
                        guitar={guitar}
                    />
            }

        </div>
    )
}

export default ItemDetailContainer
