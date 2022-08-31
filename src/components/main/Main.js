import React, { useState } from 'react'
import ItemListContainer from './ItemListContainer';

import ItemDetailContainer from './ItemDetailContainer';

const Main = () => {
    //función para añadir los items al carrito
    const [showDetail, setShowDetail] = useState(false)
    const onAdd = (cant) => {

        alert(`Has añadido ${cant} items al carrito`)

    }
    return (
        <div>
            {showDetail
                ? <ItemDetailContainer
                    onAdd={onAdd}
                    setShowDetail={setShowDetail}
                />
                : <ItemListContainer
                    saludo='Buenos Días'
                    setShowDetail={setShowDetail}

                />
            }




        </div>
    )
}

export default Main
