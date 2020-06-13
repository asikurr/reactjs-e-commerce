import React , {Component}from 'react';
import './App.css';
import {Route, Switch,Redirect} from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/ShopPage/ShopPage"
import SignInSignUp from "./pages/sign-in-sign-up-page/SignInSignUp";
import CheckOutPage from "./pages/checkOutPage/CheckOutPage";

import HeaderMenu from "./components/headerMenu/HeaderMenu";

import {auth,createUserProfileDocument, addCollectionAndDocument} from "./firebase/firebase.utils"

import {connect} from "react-redux"
import {setCurrentUser} from "./redux/user/user.action";
import {createStructuredSelector} from "reselect"
import {SelectCurrentUser} from "./redux/user/user.selectors"
// import {selectCollectionForPreview} from "./redux/shop/shopSelector"



class App extends Component{

    unSubscribeFromAuth = null;
    componentDidMount() {
        const {setCurrentUser,collectionArray} = this.props;
        this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
            // this.setState({current_user:user});
            // createUserProfileDocument(user);
            // console.log(user);

            if (userAuth){
                const userRef =await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    setCurrentUser(
                        {
                            id:snapshot.id,
                            ...snapshot.data()
                        }
                    );

                });
            }

            setCurrentUser(userAuth);
            // addCollectionAndDocument('collections',collectionArray.map(({title, items}) => ({title,items})));
        });
    }

    componentWillUnmount() {
        this.unSubscribeFromAuth();
    }

    render (){
        const {currentUser} = this.props
        return (
            <div >
                <HeaderMenu />
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route exact path='/signIn' render={ ()=> currentUser?(<Redirect to="/" />):(<SignInSignUp/>)}/>
                    <Route exact path='/checkout' component={CheckOutPage}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector ({
   currentUser : SelectCurrentUser,
    // collectionArray: selectCollectionForPreview
});

const mapDispatchToProps = dispatch =>({
   setCurrentUser:user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
