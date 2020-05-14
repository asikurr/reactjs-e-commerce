export const addItemsToCart = (cartItems, addToCartItems) => {
    const existingCartItems = cartItems.find(
        cartItem => cartItem.id === addToCartItems.id
    );

    if(existingCartItems){
        return cartItems.map(cartItem=>
            cartItem.id === addToCartItems.id ?
                {...cartItem, quantity:cartItem.quantity + 1 } : cartItem
        )
    }

    return [...cartItems, {...addToCartItems, quantity:1}]
};

export const removeItemFromCart = (cartItems, removeToCartItem) => {
    const existingCartItems = cartItems.find(
        cartItem=>cartItem.id === removeToCartItem.id
    );

    if(existingCartItems.quantity === 1){
        return cartItems.filter(cartItem=>cartItem.id !== removeToCartItem.id)

    }
    return cartItems.map(
        cartItem=>
            cartItem.id === removeToCartItem.id ? {...cartItem , quantity: cartItem.quantity - 1} :
                cartItem
    )
};