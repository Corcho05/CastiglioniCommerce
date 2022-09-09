/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
//import { productsM } from '../../mock/products';
import styles from '../../styles/Spinner.module.css';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getDoc, getFirestore, doc } from 'firebase/firestore';
const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false);
    const [msgError, setMsgError] = useState(false);

    //LEO EL PARAMETRO DE LA URL
    const { idItem } = useParams();


    useEffect(() => {
        setLoading(true);


        //Para poder utilizar el await tengo que crear una función async
        const getDocFirebase = async () => {
            const db = getFirestore();
            const docRef = doc(db, "items", idItem);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setProduct({ id: docSnap.id, ...docSnap.data() });
                //setLoading(false);
                setLoading(false);
                setMsgError(false);

            } else {
                // No existe el documento se agrega un time out para ver el efecto
                setTimeout(() => {
                    setLoading(false);
                    setMsgError(true);

                }, 1000);

                // setEstados(false, false, true)
                //setError(true);
            }
        }
        //Llamo a la función async que consulta a firebase
        getDocFirebase();

    }, [idItem])


    return (
        <div >

            {loading && <h2 className={styles.loader}>Cargando...</h2>}
            {msgError && <div className='contenedor'><h3 >No existe el producto con id: {idItem}</h3></div>}
            {product.title && <ItemDetail
                product={product}
            />
            }


        </div>
    )
}

export default ItemDetailContainer
