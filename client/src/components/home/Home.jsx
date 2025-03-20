import "./Home.module.css";

const products = [
  {
    name: "Callaway Glove Tour Authentic",
    image: "https://example.com/callaway-glove.jpg",
    price: "$29.99",
  },
  {
    name: "TravisMathew Wanderlust Shorts",
    image: "https://example.com/wanderlust-shorts.jpg",
    price: "$79.99",
  },
  {
    name: "Titleist Pro V1 Golf Balls",
    image: "https://example.com/prov1-balls.jpg",
    price: "$49.99",
  },
  {
    name: "TaylorMade Stealth 2 Driver",
    image: "https://example.com/stealth2-driver.jpg",
    price: "$599.99",
  },
];



export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Proshop</h1>
      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p className="price">{product.price}</p>
            <button className="buy-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
