import { createContext, useContext, useState } from "react";
import {
    addToCartLogic,
    removeFromCartLogic,
    clearCartLogic,
    calculateTotalPrice
} from "../api/cartApi.js";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart(prevCart => addToCartLogic(prevCart, item));
    };

    const removeFromCart = (id) => {
        setCart(prevCart => removeFromCartLogic(prevCart, id));
    };

    const clearCart = () => {
        setCart(clearCartLogic());
    };

    const totalPrice = calculateTotalPrice(cart);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
