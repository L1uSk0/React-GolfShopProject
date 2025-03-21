import { useState, useEffect } from "react";
import "./Catalog.css";

const fakeData = [
  { id: 1, name: "Golf Club Set", price: "$299", image: "https://www.bigw.com.au/medias/sys_master/images/images/h26/h3c/63238842777630.jpg" },
  { id: 2, name: "Golf Ball Pack", price: "$49", image: "https://www.golftiniwear.com/cdn/shop/files/golftini-x-callaway-golf-balls-3-pack-692445.jpg?v=1726614472&width=851" },
  { id: 3, name: "Golf Shoes", price: "$120", image: "https://imageio.forbes.com/specials-images/imageserve/608a2a66bb6337d8bbf583aa/FootJoy-Premiere-Series/960x0.jpg?format=jpg&width=1440" },
  { id: 4, name: "Golf Glove", price: "$25", image: "https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/AADH_PRD/on/demandware.static/-/Sites-CGI-ItemMaster/en_US/v1742578965014/sits/gloves-2019-weather-spann-2-pack/gloves-2019-weather-spann-2-pack_2___1.jpg?sw=1200&q=90&bgcolor=F7F7F7&sfrm=png" },
  { id: 5, name: "Golf Bag", price: "$150", image: "https://www.carlsgolfland.com/media/catalog/product/cache/2a6aa0552ad25addc14fa921d5ef0bc2/t/i/titleist_premium_stand_bag_2022_tb20sxsf_01_black_white_hero.jpg" },
];

export default function Catalog() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setItems(fakeData);
  }, []);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="catalog-container">
      <h2>Golf Equipment Catalog</h2>
      <input
        type="text"
        placeholder="Search for items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <div className="catalog-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="catalog-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}