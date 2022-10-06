import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './styles/globals.css';
import './styles/normalize.css';
import Main from './components/main/Main';
import { CartProvider } from './context/cartContext';

function App() {
    return (
        <BrowserRouter>
            <CartProvider>
                <Header />
                <Main />
                <Footer />
            </CartProvider>
        </BrowserRouter>
    );
}

export default App;