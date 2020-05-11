import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {ReactComponent as Logo} from '../../asset/shop.svg'
import {auth} from "../../firebase/firebase.utils";
import './header.style.scss'
import CartIcon from "../cartIcon/CartIcon";
import CartDropDown from "../cartDropdown/CartDropDown";

const HeaderMenu = ({current_user,hidden}) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {
                    current_user?
                        (
                            <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
                        ):
                        (
                            <Link className="option" to="/signIn">SIGN IN</Link>
                        )
                }

            <CartIcon/>
            </div>
            {hidden?null:<CartDropDown/>}

        </div>
    );
};

const mapStateToProps = ({user:{current_user}, cart:{hidden} }) => ({
    current_user,
    hidden
});

export default connect(mapStateToProps)(HeaderMenu);