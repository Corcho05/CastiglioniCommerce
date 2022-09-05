import React from 'react'
import ItemListContainer from './ItemListContainer';
import { Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer';
import Cart from './Cart';

const Main = () => {

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
                    element={<ItemDetailContainer />}

                />
                <Route
                    path='/cart'
                    element={<Cart />}

                />
            </Routes>
        </div>

    )
}

export default Main
