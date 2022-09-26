/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styles from '../../styles/Spinner.module.css';
import ItemList from './ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const ItemListContainer = ({ saludo, addItemsCar }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [msgerror, setMsgError] = useState("");
    //LEO EL PARAMETRO DE LA URL
    const { categoryName } = useParams();
    useEffect(() => {
        setLoading(true);
        //Para poder utilizar el await tengo que crear una función async
        if (!categoryName) {

            const itemsCollection = collection(db, "items");
            getDocs(itemsCollection).then((res) => {
                if (res.size === 0) {
                    console.log('No results!');
                }

                setProducts(res.docs.map(doc => ({ id: doc.id, ...doc.data() })));

                setLoading(false);
            }).catch((error) => {
                //  console.log('Error searching items', error);
                setError('Hubo un error al cargar los productos, consulte con el administrador.');
            }).finally(() => {
                setLoading(false);
            });
        } else {
            const q = query(
                collection(db, "items"),
                where("category", "==", categoryName)
            );
            getDocs(q).then((res) => {
                if (res.size === 0) {
                    console.log('No results!');
                }
                setProducts(res.docs.map(doc => ({ id: doc.id, ...doc.data() })));
                setLoading(false);
            }).catch((error) => {

                setError(true);
                setMsgError(`Hubo un error al cargar los productos de la categoría ${categoryName}, consulte con el administrador.`);
            }).finally(() => {

                setLoading(false);
            }
            );

        }


    }, [categoryName])

    return (

        <main className='contenedor'>
            <h3 className='heading'>{saludo}</h3>
            <h3 className='heading'>Nuestros Productos  </h3>
            {error && <div><h3>{msgerror}</h3></div>}
            {loading ? <h2 className={styles.loader}>Cargando...</h2>
                : <ItemList
                    products={products}
                    addItemsCar={addItemsCar}

                />
            }

        </main>
    )
}

export default ItemListContainer
