import {createSelector} from "reselect"

const selectCart =state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart=> cart.cartItems
);

export const selectCartDropdownHidden = createSelector(
    [selectCart],
    cart=>cart.hidden
);

export const selectCartItemCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((accumalatedQuantity,cardItem)=>
            accumalatedQuantity + cardItem.quantity,0
        )
);

export const selectCartTotalPrice = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((accumalatedQuantity,cardItem)=>
            accumalatedQuantity + cardItem.quantity * cardItem.price,0
        )
);