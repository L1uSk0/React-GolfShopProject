import "./CreateItem.css"

import { useNavigate } from "react-router";
import { useCreateItem } from "../../api/itemApi.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateItem() {
    const navigate = useNavigate();
    const { create: createItem } = useCreateItem();

    const submitAction = async (formData) => {
        const itemData = Object.fromEntries(formData);
        try {
            await createItem(itemData);
            toast.success("Item Created successfully!");
            navigate('/items');
        } catch (error) {
            console.error("Create failed:", error);
            toast.error(error.message || "Failed to create item. Please try again.");
        }

    }

    return (
        <>
            <div className="main-container">
                <div className="create-item-container">
                    <h1>Sell an Item</h1>
                    <form action={submitAction} className="create-item-form">
                        <div className="form-group">
                            <label htmlFor="name">Item Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="brand">Brand</label>
                            <input type="text" id="brand" name="brand" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="model">Model</label>
                            <input type="text" id="model" name="model" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="img">Image URL</label>
                            <input type="url" id="img" name="img" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="year">Year</label>
                            <input type="number" id="year" name="year" min={1900} max={2099} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="quantity">Quantity</label>
                            <input type="number" id="quantity" name="quantity" min={1} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input type="number" id="price" name="price" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="quality">Quality</label>
                            <select id="quality" name="quality" required>
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
