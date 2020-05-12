import React from 'react';
import {withRouter} from "react-router-dom"
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {toggleCartHidden} from "../../redux/cart/cart.action";

import CustomButtom from "../customButton/CustomButtom";
import CartItem from "../cartItem/CartItem"

import "./cart-dropdown.style.scss"

const CartDropDown = ({cartItems,history, dispatch}) => {
    // console.log(otherProps)
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {   cartItems.length?
                    cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))
                    : <div className="empty-message">Your cart is empty !</div>
                }
            </div>
            <CustomButtom onClick={()=>{
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }}>
                Go To CHECKOUT</CustomButtom>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
});

export default withRouter(connect(mapStateToProps) (CartDropDown));