import React, { useState } from "react"
import { useCart } from "../../contexts/CartContext.jsx"
import "./CartComponent.css"
import { useEditItem } from "../../api/itemApi.js";
import { useNavigate } from "react-router";

export default function CartComponent() {
    const navigate = useNavigate();
    const { cart, removeFromCart, totalPrice, clearCart } = useCart();
    console.log(cart);
    const { edit } = useEditItem();
    const [error, setError] = useState(null);

    const handlePurchase = async () => {
        setError(null)

        try {
            for (const item of cart) {
                if (item.cartQuantity > item.quantity) {
                    setError(`Not enough stock of ${item.name}`)
                    return;
                }
                await edit(item._id, { quantity: item.quantity - item.cartQuantity , ...item})

            }

            clearCart();
            alert('Successfull Purchase')
            navigate('/items')
        } catch (err) {
            console.error("Purchase error:", err);
            setError(`Purchase failed: ${err.message || "Something went wrong."}`);
        }
    }

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item._id} className="cart-item">
                            <img src={item.img} alt={item.name} className="cart-image" />
                            <div className="cart-info">
                                <h3>{item.name}</h3>
                                <p>Brand: {item.brand}</p>
                                <p>Model: {item.model}</p>
                                <p>Price: ${item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <button onClick={() => removeFromCart(item._id)} className="remove-btn">Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <h3 className="total-price">Total: ${totalPrice.toFixed(2)}</h3>

            {error && <p className="error-message">{error}</p>}

            {cart.length > 0 && (
                <button onClick={handlePurchase} className="purchase-btn">Purchase</button>
            )}
        </div>
    );
}
