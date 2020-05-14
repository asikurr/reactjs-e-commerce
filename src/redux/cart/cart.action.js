import cartActionType from "./cart.type";

export const toggleCartHidden = () => ({
    type:cartActionType.TOGGLE_CART_DROPDOWN
});

export const addItems = (item) => ({
    type:cartActionType.ADD_ITEMS,
    payload:item
});

export const ClearCartItem =(item) =>({
    type:cartActionType.CLEAR_CART_ITEM,
    payload:item
});

export const RemoveCartItem =(item) =>({
    type:cartActionType.REMOVE_ITEM,
    payload:item
});