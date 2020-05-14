import React from 'react';
import {connect} from "react-redux";

import {ClearCartItem, addItems, RemoveCartItem} from "../../redux/cart/cart.action";


import "./checkoutitem.style.scss"

const CheckOutItem = ({cardItem,ClearItem,addItem,removeItem}) =>{
    const {name,imageUrl,quantity,price} = cardItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="Item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=>removeItem(cardItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=>addItem(cardItem)}>&#10095;</div>
            </span>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={()=>ClearItem(cardItem)}>&#10007;</div>
        </div>
    );
};

const mapDispatchToProps = dispatch =>({
    ClearItem :item => dispatch(ClearCartItem(item)),
    addItem : item => dispatch(addItems(item)),
    removeItem : item => dispatch(RemoveCartItem(item))
});
export default connect(null,mapDispatchToProps)(CheckOutItem);

