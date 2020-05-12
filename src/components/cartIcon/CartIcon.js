import React from 'react';
import {ReactComponent as ShoppingIcon} from "../../asset/shopping-bag.svg";
import {toggleCartHidden} from "../../redux/cart/cart.action";
import {selectCartItemCount} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import "./cart-icon.style.scss";

const CartIcon = ({toggleCartHidden,itemCount}) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden} >
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    );
};

const mapDispatchToProps = dispatch =>({
    toggleCartHidden:() => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
   itemCount:selectCartItemCount

});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);