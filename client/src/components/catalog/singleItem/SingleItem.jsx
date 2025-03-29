import { Link } from "react-router";


export default function SingleItem({
    id,
    img,
    name,
    price
}) {
    return (
        <>
            <div key={id} className="catalog-item">
                <img src={img} alt={name} />
                <h3>{name}</h3>
                <p>{price}</p>
                <button className="add tocard">Add to Cart</button>
                <Link to={`/items/${id}/details`} className="details-button">Details</Link>
            </div>
        </>
    );
}