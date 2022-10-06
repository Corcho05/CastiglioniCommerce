import React, { useState, createContext } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    const addItem = (item, quantity) => {

        if (isInCart(item.id)) {

            const newCart = cart.map((cartItem) => {
                if (cartItem.id === item.id) {
                    return { ...item, quantity: cartItem.quantity + quantity };
                } else {
                    return cartItem;
                }
            });
            setCart(newCart);
        } else {


            setCart([...cart, { ...item, quantity }]);
        }
    };

    const removeItem = (itemId) => {
        const newCart = cart.filter((cartItem) => cartItem.id !== itemId);
        setCart(newCart);
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some((cartItem) => cartItem.id === itemId);
    };
    const getTotalItems = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.quantity;
        });
        return total;
    };
    const getTotalPrice = () => {
        let total = 0;
        cart.forEach((item) => {

            total += item.price * item.quantity;
        });
        return Math.round(total);
    };

    const getProductQuantity = (itemId) => {
        const item = cart.find((cartItem) => cartItem.id === itemId);
        return item?.quantity;
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                clear,
                getTotalItems,
                getTotalPrice,
                getProductQuantity,
                isInCart
            }}>
            {children}
        </CartContext.Provider>
    );
}

export {
    CartProvider
}
export default CartContext;
