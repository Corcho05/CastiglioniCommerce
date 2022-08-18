import React from 'react'
import carrito from '../img/carrito.png';
import { Link } from 'react-router-dom'
const CartWidget = () => {
    return (
        <Link to='/contacto'>
            <img
                src={carrito}
                alt="Imagen Carrito"
                width={30}
                height={25}
            />
        </Link>
    )
}

export default CartWidget
