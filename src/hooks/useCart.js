import { useContext } from "react";
import CartContext from "../context/cartContext";
const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart debe estar dentro del proveedor CartProvider");
    }
    return context;
}
export default useCart;
