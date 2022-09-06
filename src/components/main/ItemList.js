import React from 'react'
import styles from '../../styles/Listado.module.css';
import Item from './Item';

const ItemList = ({ products }) => {
    // const [render, setRender] = useState(false);
    // useEffect(() => {
    //     setRender(true);

    // }, [loading])

    // if (!render) return null;
    // console.log('products', products)
    return (

        <div className={styles.listado} >
            {
                products.map(product => {
                    return (
                        <Item
                            key={product.id}
                            product={product}

                        />
                    )
                }
                )
            }
        </div >
    )
}

export default ItemList;
