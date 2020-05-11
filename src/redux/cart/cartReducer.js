import cartActionType from "./cart.type"

const INITTIAL_STATE = {
    hidden:true
};
const cartReducer = (state=INITTIAL_STATE,action) => {
    switch (action.type){
        case cartActionType.TOGGLE_CART_DROPDOWN:
            return{
                ...state,
                hidden: !state.hidden
            };
        default:
            return state;
 }
};

export default cartReducer;