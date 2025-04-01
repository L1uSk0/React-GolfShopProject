import React, { useState } from "react"
import { useCart } from "../../contexts/CartContext.jsx"
import "./CartComponent.css"
import { useEditItem, useItems } from "../../api/itemApi.js";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CartComponent() {
    const navigate = useNavigate();
    const { cart, removeFromCart, totalPrice, clearCart } = useCart();
    const { items } = useItems();
    const { edit } = useEditItem();
    const [error, setError] = useState(null);

    if (!items) {
        return <p>Loading...</p>;
    }

    const handlePurchase = async () => {
        setError(null);

        try {
            for (const cartItem of cart) {
                const serverItem = items.find(item => item._id === cartItem._id);

                if (!serverItem) {
                    const errorMessage = `Item ${cartItem.name} not found on server.`;
                    setError(errorMessage);
                    toast.error(errorMessage);
                    return;
                }
                const updatedQuantity = Number(serverItem.quantity) - Number(cartItem.quantity);

                if (updatedQuantity < 0) {
                    const errorMessage = `Not enough stock of ${cartItem.name}`;
                    setError(errorMessage);
                    toast.error(errorMessage);
                    return;
                }
                await edit(cartItem._id, { ...serverItem, quantity: updatedQuantity });
            }

            clearCart();
            toast.success("✅ Successful Purchase!");
            navigate("/");
        } catch (err) {
            console.error("Purchase failed:", err);
            toast.error(`❌ Purchase failed: ${err.message || "Something went wrong."}`);
        }
    };

    return (
        <div className="cartholder-container">
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
        </div>
    );
}
