import cartActionType from "./cart.type"
import {addItemsToCart} from "./cart.utils"

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
        default:
            return state;
 }
};

export default cartReducer;