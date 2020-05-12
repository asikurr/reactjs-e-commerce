import React from 'react';

import "./checkoutitem.style.scss"

const CheckOutItem = ({cardItem:{name,imageUrl,quantity,price}}) =>{
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="Item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">${price}</span>
            <div className="remove-button">&#10007;</div>
        </div>
    );
}

export default CheckOutItem;