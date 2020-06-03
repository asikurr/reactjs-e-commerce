import React from 'react';

import {connect} from "react-redux";
import {selectCartItems, selectCartTotalPrice} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect"

import CheckOutItem from "../../components/checkOutItem/CheckOutItem";
import "./checkout-page.style.scss"
import StripePaymentButton from "../../components/stripe/StripePaymentButton";

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
            <div className="test-warning">
                *Please used following tst credit card information for payment*
                <br/>
                card: 4000 0566 5566 5556, Exp: 01/21, cvv: 123
            </div>
            <StripePaymentButton price={totalPrice}/>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
   cartItems:selectCartItems,
    totalPrice:selectCartTotalPrice

});

export default connect(mapStateToProps)(CheckOutPage);