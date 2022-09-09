/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
//import { productsM } from '../../mock/products';
import styles from '../../styles/Spinner.module.css';
import ItemList from './ItemList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';


const ItemListContainer = ({ saludo, addItemsCar }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    //LEO EL PARAMETRO DE LA URL
    const { categoryName } = useParams();


    const db = getFirestore();
    useEffect(() => {
        setLoading(true);
        if (!categoryName) {

            const itemsCollection = collection(db, "items");
            getDocs(itemsCollection).then((snapshot) => {
                if (snapshot.size === 0) {
                    console.log('No results!');
                }

                setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));

                setLoading(false);
            });
        } else {
            const db = getFirestore();
            const q = query(
                collection(db, "items"),
                where("category", "==", categoryName)
            );
            getDocs(q).then((snapshot) => {
                if (snapshot.size === 0) {
                    console.log('No results!');
                }
                setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
                setLoading(false);
            });

        }


    }, [categoryName])

    return (

        <main className='contenedor'>
            <h3 className='heading'>{saludo}</h3>
            <h3 className='heading'>Nuestros Productos</h3>
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
