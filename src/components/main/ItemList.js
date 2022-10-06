import React from 'react'
import styles from '../../styles/Listado.module.css';
import Item from './Item';

const ItemList = ({ products }) => {

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
