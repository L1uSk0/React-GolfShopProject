import React from "react";
import "./ItemDetails.css";
import { Link, useNavigate, useParams } from "react-router";
import useAuth from "../../hooks/useAuth.js";
import { useDeleteItem, useItem } from "../../api/itemApi.js";


export default function ItemDetails() {
    const navigate = useNavigate();
    const { itemId } = useParams();
    console.log(itemId);
    const { userId } = useAuth();
    const { item } = useItem(itemId);
    const { deleteItem } = useDeleteItem();

    console.log(item);

    const itemDeleteHandler = async () => {
        const confirmation = confirm(`Are you sure you want to delete ${item.name} item ?`)
        if (!confirmation) {
            return;
        }

        await deleteItem(itemId)

        navigate('/items')
    }

    const isOwner = userId === item._ownerId


    return (
        <>
            <div className="details-overlay">
                <div className="details-card">
                    <img src={item.img} alt={item.name} className="details-image" />
                    <h3>{item.name}</h3>
                    <p><strong>Price:</strong> {item.price}</p>
                    <p><strong>Brand:</strong> {item.brand}</p>
                    <p><strong>Model:</strong> {item.model}</p>
                    <p><strong>Year:</strong> {item.year}</p>
                    <p><strong>Quantity:</strong> {item.quantity}</p>
                    <p><strong>Quality:</strong> {item.quality}</p>
                    {isOwner && (
                        <>
                            <Link to={`/items/${itemId}/edit`} className="button">Edit</Link>
                            <button className="delete-button" onClick={itemDeleteHandler}>Delete</button>
                        </>
                    )}
                    <button className="close-button">Close</button>
                </div>
            </div>
        </>
    );
};


