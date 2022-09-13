import React, { useState, createContext } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        console.log(item)
        //console.log({ ...item, quantity })
        if (isInCart(item.id)) {
            console.log('Ya esta en el carrito ', item.id)
            //Si existe hago un map para sumarle la cantidad que quiero agregar
            const newCart = cart.map((cartItem) => {
                if (cartItem.id === item.id) {
                    return { ...item, quantity: cartItem.quantity + quantity };
                } else {
                    return cartItem;
                }
            });
            setCart(newCart);
        } else {
            console.log('No existe');
            //Si no existe lo agrego al carrito
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
        return cart.some((cartItem) => cartItem.id === itemId); //Devuelve true o false si existe el item en el carrito
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
        //optional chaining, controla que si no existe el item no se rompa
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
