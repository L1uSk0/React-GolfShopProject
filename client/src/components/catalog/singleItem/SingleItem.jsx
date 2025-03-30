import { Link } from "react-router";
import { useCart } from "../../../contexts/CartContext.jsx";

export default function SingleItem({
    _id,
    img,
    name,
    price,
    brand,
    model
}) {

    const { addToCart } = useCart();

    return (
        <>
            <div key={_id} className="catalog-item">
                <img src={img} alt={name} />
                <h3>{name}</h3>
                <p>{price}$</p>
                <button className="add tocard" onClick={() => addToCart({ _id, img, name, price, brand, model })}>Add to Cart</button>
                <Link to={`/items/${_id}/details`} className="details-button">Details</Link>
            </div>
        </>
    );
}