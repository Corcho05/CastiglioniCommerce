import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styles from '../../styles/Detail.module.css';
import ItemCount from './ItemCount';
import useCart from '../../hooks/useCart';

const ItemDetail = ({ product }) => {

    const { addItem, getProductQuantity } = useCart();

    const [count, setCount] = useState(0);


    const onAdd = (cant) => {


        setCount(cant);

        addItem(product, cant);
    }

    const quantity = getProductQuantity(product.id) > 0 ? getProductQuantity(product.id) : 0;
    const stockActual = product.stock - quantity;


    return (
        <div key={product.id} className={styles.detail} >
            <img src={product.img} alt={product.title} width={350} height={550} />
            <div className="info">
                <h2>{product.title}</h2>

                <p>{product.descriptions}</p>
                {count === 0
                    ? <ItemCount
                        product={product}
                        stock={stockActual}
                        initial={1}
                        onAdd={onAdd}
                        added={quantity}

                    />
                    : <div>
                        <Link
                            to='/cart'
                            style={{ textDecoration: 'none' }}
                        ><button>Finalizar compra</button>
                        </Link>
                    </div>
                }

                <Link
                    to='/'
                    className={{ textDecoration: 'none' }}
                >Seguir comprando</Link>
            </div>
        </div >
    )
}

export default ItemDetail
