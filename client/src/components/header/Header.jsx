import "./Header.css"

import { Link } from "react-router";
import useAuth from "../../hooks/useAuth.js";
import { useCart } from "../../contexts/CartContext.jsx";



export default function Header() {
    const { email, isAuthenticated } = useAuth();
    const { cart } = useCart();
    return (
        <>
            <header>
                <h1>Welcome to Jerni's Golf Shop</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/items">Catalog</Link></li>
                        {isAuthenticated
                            ? (
                                <>
                                    <li><Link to="/items/create">Sell an Item</Link></li>
                                    <li><Link to="/logout">Logout</Link></li>
                                </>
                            ) :
                            (
                                <>
                                    <li><Link to="/register">Register</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                </>
                            )
                        }
                    </ul>
                </nav>
                <div className="cart-icon">
                    {isAuthenticated && (
                        <>
                            <p>Welcome, {email}!</p>
                        </>
                    )}
                    <p>
                        <Link to="/cart" className="cartLink">🛒 Cart: {cart.length} items</Link>
                    </p>
                </div>
            </header>
        </>
    );
}