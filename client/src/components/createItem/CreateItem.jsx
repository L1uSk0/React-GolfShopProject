export default function CreateItem() {
    return (
        <>
            <h1>Sell an Item</h1>
            <form action="#" method="POST">
                <label htmlFor="name">Item Name:</label>
                <input type="text" id="name" name="name" required="" />
                <label htmlFor="brand">Brand:</label>
                <input type="text" id="brand" name="brand" required="" />
                <label htmlFor="model">Model:</label>
                <input type="text" id="model" name="model" required="" />
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" required="" />
                <label htmlFor="img">Image URL:</label>
                <input type="url" id="img" name="img" required="" />
                <label htmlFor="year">Year:</label>
                <input
                    type="number"
                    id="year"
                    name="year"
                    min={1900}
                    max={2099}
                    required=""
                />
                <label htmlFor="quantity">Quantity:</label>
                <input type="number" id="quantity" name="quantity" min={1} required="" />
                <label htmlFor="quality">Quality:</label>
                <select id="quality" name="quality" required="">
                    <option value="excellent">Excellent</option>
                    <option value="very good">Very Good</option>
                    <option value="good">Good</option>
                    <option value="poor">Poor</option>
                    <option value="bad">Bad</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}