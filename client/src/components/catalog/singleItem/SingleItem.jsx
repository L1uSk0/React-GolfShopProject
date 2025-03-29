import { Link } from "react-router";


export default function SingleItem({
    id,
    image,
    name,
    price
}) {
    return (
        <>
            <div key={id} className="catalog-item">
                <img src={image} alt={name} />
                <h3>{name}</h3>
                <p>{price}</p>
                <button className="add tocard">Add to Cart</button>
                <Link to={`/items/${id}/details`} className="details-button">Details</Link>
            </div>
        </>
    );
}