import React , {Component}from 'react';
import './App.css';
import Homepage from "./pages/homepage/Homepage";
import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage"
import HeaderMenu from "./components/headerMenu/HeaderMenu";
import SignInSignUp from "./pages/sign-in-sign-up-page/SignInSignUp";
import {auth} from "./firebase/firebase.utils"



class App extends Component{
    constructor() {
        super();

        this.state={
            current_user: null
        }
    }
    unSubscribeFromAuth = null;
    componentDidMount() {
        this.unSubscribeFromAuth = auth.onAuthStateChanged(user=>{
            this.setState({current_user:user});
            console.log(user);
        })
    }

    componentWillUnmount() {
        this.unSubscribeFromAuth();
    }

    render (){
        return (
            <div >
                <HeaderMenu currentUser = {this.state.current_user}/>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route exact path='/shop' component={ShopPage}/>
                    <Route exact path='/signIn' component={SignInSignUp}/>
                </Switch>
            </div>
        );
    }
}

export default App;
