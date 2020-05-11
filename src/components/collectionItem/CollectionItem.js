import React from 'react';
import './collection-item.style.scss'
import {connect} from "react-redux";
import CustomButtom from "../customButton/CustomButtom";
import {addItems} from "../../redux/cart/cart.action";

const CollectionItem = ({item,addItems}) =>{
    const {name,price,imageUrl} = item;
    return (
        <div className="collection-item">
            <div
            className="image"
            style={{backgroundImage:`url(${imageUrl})`}}
            />

            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}$</span>
            </div>

            <CustomButtom onClick={()=>addItems(item)} inverted>Add to cart</CustomButtom>
        </div>
    );
}

const mapDispatchToProps = (dispatch) =>({
    addItems:(item)=>dispatch(addItems(item))
});
export default connect(null,mapDispatchToProps)(CollectionItem);