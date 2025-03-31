
export const addToCartLogic = (cart, item) => {
    const existingItem = cart.find(cartItem => cartItem._id === item._id);
    if (existingItem) {
        return cart.map(cartItem =>
            cartItem._id === item._id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    return [...cart, { ...item, quantity: 1 }];
};

export const removeFromCartLogic = (cart, id) => {
    return cart.filter(item => item._id !== id);
};

export const clearCartLogic = () => {
    return [];
};

export const calculateTotalPrice = (cart) => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
};
