import cartActionType from "./cart.type"
import {addItemsToCart,removeItemFromCart} from "./cart.utils"

const INITTIAL_STATE = {
    hidden:true,
    cartItems : []
};
const cartReducer = (state=INITTIAL_STATE,action) => {
    switch (action.type){
        case cartActionType.TOGGLE_CART_DROPDOWN:
            return{
                ...state,
                hidden: !state.hidden
            };
        case cartActionType.ADD_ITEMS:
            return{
                ...state,
                cartItems: addItemsToCart(state.cartItems, action.payload)
            };
        case cartActionType.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        case cartActionType.CLEAR_CART_ITEM:
            return{
                ...state,
                cartItems: state.cartItems.filter(cartItem=>cartItem.id !== action.payload.id)
            };
        default:
            return state;
 }
};

export default cartReducer;