import React, { useEffect, useState } from 'react'
import styles from '../../styles/Listado.module.css';
import ItemGuitarra from './ItemGuitarra';

const ItemListGuitarras = ({ guitars, setShowDetail }) => {
    // const [render, setRender] = useState(false);
    // useEffect(() => {
    //     setRender(true);

    // }, [loading])

    // if (!render) return null;
    return (
        <div className={styles.listado}>
            {guitars.map(guitar => {
                return (
                    <ItemGuitarra
                        key={guitar.id}
                        guitar={guitar}
                        setShowDetail={setShowDetail}
                    />
                )
            }
            )}
        </div>
    )
}

export default ItemListGuitarras
