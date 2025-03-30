import "./ItemEdit.css"

import { Navigate, useNavigate, useParams } from "react-router";
import { useEditItem, useItem } from "../../api/itemApi.js";
import useAuth from "../../hooks/useAuth.js";

export default function ItemEdit() {

    const navigate = useNavigate();
    const { itemId } = useParams();
    const { userId } = useAuth();
    const { item } = useItem(itemId);
    const { edit } = useEditItem();

    if (!item) {
        return <p>Loading...</p>;
    }

    console.log(item._ownerId);

    const isOwner = userId === item._ownerId;

    if (!isOwner) {
        return <Navigate to="/items" />
    }

    const formAction = async (formData) => {
        const itemData = Object.fromEntries(formData);

        await edit(itemId, itemData);

        navigate(`/items/${itemId}/details`);
    }

    return (
        <>
            <div className="main-container">
                <div className="edit-item-container">
                    <h1>Edit an Item</h1>
                    <form action={formAction} className="edit-item-form">
                        <div className="editform-group">
                            <label htmlFor="name">Item Name</label>
                            <input type="text" id="name" name="name" defaultValue={item.name} required />
                        </div>

                        <div className="editform-group">
                            <label htmlFor="brand">Brand</label>
                            <input type="text" id="brand" name="brand" defaultValue={item.brand} required />
                        </div>

                        <div className="editform-group">
                            <label htmlFor="model">Model</label>
                            <input type="text" id="model" name="model" defaultValue={item.model} required />
                        </div>

                        <div className="editform-group">
                            <label htmlFor="img">Image URL</label>
                            <input type="url" id="img" name="img" defaultValue={item.img} required />
                        </div>

                        <div className="editform-group">
                            <label htmlFor="year">Year</label>
                            <input type="number" id="year" name="year" defaultValue={item.year} min={1900} max={2099} required />
                        </div>

                        <div className="editform-group">
                            <label htmlFor="quantity">Quantity</label>
                            <input type="number" id="quantity" name="quantity" defaultValue={item.quantity} min={1} required />
                        </div>

                        <div className="editform-group">
                            <label htmlFor="price">Price</label>
                            <input type="number" id="price" name="price" defaultValue={item.price} required />
                        </div>

                        <div className="editform-group">
                            <label htmlFor="quality">Quality</label>
                            <select id="quality" name="quality" defaultValue={item.quality} required>
                                <option value="excellent">Excellent</option>
                                <option value="very good">Very Good</option>
                                <option value="good">Good</option>
                                <option value="poor">Poor</option>
                                <option value="bad">Bad</option>
                            </select>
                        </div>
                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}