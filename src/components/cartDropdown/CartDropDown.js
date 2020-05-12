import React from 'react';
import {connect} from "react-redux";
import CustomButtom from "../customButton/CustomButtom";
import CartItem from "../cartItem/CartItem"
import {selectCartItems} from "../../redux/cart/cart.selectors";
import "./cart-dropdown.style.scss"

const CartDropDown = ({cartItems}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))
                }
            </div>
            <CustomButtom>Go To CHECKOUT</CustomButtom>
        </div>
    );
};

const mapStateToProps = (state)=>({
    cartItems:selectCartItems(state)
});

export default connect(mapStateToProps) (CartDropDown);