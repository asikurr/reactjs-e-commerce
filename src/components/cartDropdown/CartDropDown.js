import React from 'react';
import CustomButtom from "../customButton/CustomButtom";
import "./cart-dropdown.style.scss"

const CartDropDown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-item"/>
            <CustomButtom>Go To CHECKOUT</CustomButtom>
        </div>
    );
}

export default CartDropDown;