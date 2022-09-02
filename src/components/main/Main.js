import React from 'react'
import ItemListContainer from './ItemListContainer';
import { Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer';

const Main = () => {
    //función para añadir los items al carrito

    const onAdd = (cant) => {

        alert(`Has añadido ${cant} items al carrito`)

    }
    return (
        <div>
            <Routes>
                <Route
                    path='/'
                    element={<ItemListContainer saludo="Bienvenidos" />}

                />
                <Route
                    path='/category/:categoryName'
                    element={<ItemListContainer saludo="Bienvenidos" />}

                />
                <Route
                    path='/item/:idItem'
                    element={<ItemDetailContainer onAdd={onAdd} />}

                />
            </Routes>
        </div>

    )
}

export default Main
