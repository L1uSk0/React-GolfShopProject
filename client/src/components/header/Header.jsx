export default function Header() {
    return (
        <>
            <header>
                <h1>Welcome to Golf Shop</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/register">Register</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/items/create">Sell an Item</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}