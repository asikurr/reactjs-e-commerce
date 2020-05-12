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