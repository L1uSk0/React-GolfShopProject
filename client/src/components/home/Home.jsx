import "./Home.css";

import { useLatestItems } from "../../api/itemApi.js";
import { useCart } from "../../contexts/CartContext.jsx";

export default function Home() {
  const { latestItems } = useLatestItems();
  const { addToCart } = useCart();

  return (
    <div className="home-container">
      <h1>Welcome to the Proshop</h1>
      <div className="products-grid">
        {latestItems.map(items => (
          <div key={items._id} className="product-card">
            <img src={items.img} alt={items.name} className="product-image" />
            <h2>{items.name}</h2>
            <p className="price">{items.price}$</p>
            <button className="buy-button" onClick={() => addToCart(items)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
