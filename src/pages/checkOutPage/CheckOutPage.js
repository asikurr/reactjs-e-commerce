import React from 'react';

import {connect} from "react-redux";
import {selectCartItems, selectCartTotalPrice} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect"

import CheckOutItem from "../../components/checkOutItem/CheckOutItem";
import "./checkout-page.style.scss"

const CheckOutPage = ({cartItems,totalPrice}) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove </span>
                </div>
            </div>
            {
                cartItems.map(
                    cartItem=><CheckOutItem key={cartItem.id} cardItem={cartItem}/>
                )
            }
            <div className="total">
                <span>TOTAL : $ {totalPrice}</span>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
   cartItems:selectCartItems,
    totalPrice:selectCartTotalPrice

});

export default connect(mapStateToProps)(CheckOutPage);