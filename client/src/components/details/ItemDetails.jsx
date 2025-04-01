import "./ItemDetails.css";

import React from "react";
import { Link, useNavigate, useParams } from "react-router";
import { useDeleteItem, useItem } from "../../api/itemApi.js";
import useAuth from "../../hooks/useAuth.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ItemDetails() {
    const navigate = useNavigate();
    const { itemId } = useParams();
    const { userId } = useAuth();
    const { item } = useItem(itemId);
    const { deleteItem } = useDeleteItem();

    if (!item) {
        return <p>Loading...</p>;
    }

    const itemDeleteHandler = async () => {
        const confirmation = confirm(`Are you sure you want to delete ${item.name} item ?`)
        if (!confirmation) {
            return;
        }
        try {
            await deleteItem(itemId)
            toast.success("Item Deleted successfully!");
            navigate('/items')
        } catch (error) {
            console.error("Delete failed:", error);
            toast.error(error.message || "Failed to delete item. Please try again.");
        }

    }

    const handleOutsideClicks = (e) => {
        if (e.target.id === 'details-overlay') {
            navigate('/items');
        }
    };

    const isOwner = userId === item._ownerId

    return (
        <>
            <div className="details-overlay" id="details-overlay" onClick={handleOutsideClicks}>
                <div className="details-card" onClick={(e) => e.stopPropagation()}>
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
                            <Link to={`/items/${itemId}/edit`} className="edit-button">Edit</Link>
                            <button className="delete-button" onClick={itemDeleteHandler}>Delete</button>
                        </>
                    )}
                    <Link to={`/items`} className="close-button">Cancel</Link>
                </div>
            </div>
        </>
    );
};


