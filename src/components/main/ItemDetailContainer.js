/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Spinner.module.css';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    //LEO EL PARAMETRO DE LA URL
    const { idItem } = useParams();

    useEffect(() => {
        setLoading(true);
        //Para poder utilizar el await tengo que crear una función async
        const getDocFirebase = async () => {

            const docRef = doc(db, "items", idItem);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setProduct({ id: docSnap.id, ...docSnap.data() });

                setLoading(false);
                setError(false);

            } else {
                // No existe el documento se agrega un time out para ver el efecto
                setTimeout(() => {
                    setLoading(false);
                    setError(true);

                }, 1000);
            }
        }
        //Llamo a la función async que consulta a firebase
        getDocFirebase();

    }, [idItem])


    return (
        <div >

            {loading && <h2 className={styles.loader}>Cargando...</h2>}
            {error && <div className='contenedor'><h3 >No existe el producto con id: {idItem}</h3></div>}
            {product.title && <ItemDetail
                product={product}
            />
            }


        </div>
    )
}

export default ItemDetailContainer
