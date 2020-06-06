import React from 'react';
import {connect} from "react-redux";
import {ReactComponent as Logo} from '../../asset/shop.svg'
import {auth} from "../../firebase/firebase.utils";
import CartIcon from "../cartIcon/CartIcon";
import CartDropDown from "../cartDropdown/CartDropDown";

import {createStructuredSelector} from "reselect";
import {selectCartDropdownHidden} from "../../redux/cart/cart.selectors";
import {SelectCurrentUser} from "../../redux/user/user.selectors"

import {HeaderContainer,LogoContainer,OptionContainer,OptionDiv,OptionLink} from "./HeaderStyled"

const HeaderMenu = ({current_user,hidden}) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <OptionContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/contact">CONTACT</OptionLink>
                {
                    current_user?
                        (
                            <OptionDiv onClick={()=>auth.signOut()}>SIGN OUT</OptionDiv>
                        ):
                        (
                            <OptionLink to="/signIn">SIGN IN</OptionLink>
                        )
                }

            <CartIcon/>
            </OptionContainer>
            {hidden?null:<CartDropDown/>}

        </HeaderContainer>
    );
};

const mapStateToProps = createStructuredSelector ({
    current_user:SelectCurrentUser,
    hidden:selectCartDropdownHidden
});

export default connect(mapStateToProps)(HeaderMenu);