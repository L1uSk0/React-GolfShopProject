import React from "react";
import "./ItemDetails.css";

export default function ItemDetails() {


    return (
        <>
            <div className="details-overlay">
                <div className="details-card">
                    <img src={'hardcode'} alt={'hardcode'} className="details-image" />
                    <h3>{'hardcode'}</h3>
                    <p><strong>Price:</strong> {'hardcode'}</p>
                    <p><strong>Brand:</strong> {"hardcode"}</p>
                    <p><strong>Model:</strong> {'hardcode'}</p>
                    <p><strong>Quantity:</strong> {'hardcode'}</p>
                    <p><strong>Quality:</strong> {'hardcode'}</p>
                    <button className="edit-button">Edit</button>
                    <button className="delete-button">Delete</button>
                    <button className="close-button">Close</button>
                </div>
            </div>
        </>
    );
};


