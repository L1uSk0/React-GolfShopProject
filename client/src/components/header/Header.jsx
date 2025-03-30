import { Link } from "react-router";
import useAuth from "../../hooks/useAuth.js";

export default function Header() {
    const { username, isAuthenticated } = useAuth();
    console.log(username);
    return (
        <>
            <header>
                <h1>Welcome to Golf Shop</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/items">Catalog</Link></li>
                        {isAuthenticated
                            ? (
                                <>
                                    <li><Link to="/logout">Logout</Link></li>
                                    <li><Link to="/items/create">Sell an Item</Link></li>
                                    {username ? <p>Welcome, {username}!</p> : ""}
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
            </header>
        </>
    );
}