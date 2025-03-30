import "./Catalog.css";

import { useState } from "react";
import { useItems } from "../../api/itemApi.js";
import SingleItem from "./singleItem/SingleItem.jsx";

export default function Catalog() {
  const [search, setSearch] = useState("");

  const {items} = useItems();


  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
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
          {filteredItems.length > 0
            ? filteredItems.map((item) => <SingleItem key={item._id} {...item} />)
            : <h3 className="no-articles">No articles yet</h3>
          }
        </div>
      </div>
    </>
  );
}