import React, { useEffect, useState } from 'react'
import { guitarsM } from '../../mock/products';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ setShowDetail, onAdd }) => {
    const [guitar, setGuitar] = useState({})
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

            let guitar = data.find(guitar => guitar.id === 1)
            setGuitar(guitar)
            setLoading(false);
        })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                console.log('Finalizó la promesa')
            });

    }, [])


    const setShowDet = (show) => {
        setShowDetail(show)
    }

    return (
        <div >
            {
                loading ? <h2>Cargando...</h2>
                    : <ItemDetail
                        guitar={guitar}
                        onAdd={onAdd}
                        setShowDet={setShowDet}
                    />
            }

        </div>
    )
}

export default ItemDetailContainer
