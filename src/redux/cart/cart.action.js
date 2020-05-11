import cartActionType from "./cart.type";

export const toggleCartHidden = () => ({
    type:cartActionType.TOGGLE_CART_DROPDOWN
});

export const addItems = (item) => ({
    type:cartActionType.ADD_ITEMS,
    payload:item
});