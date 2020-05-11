import React , {Component}from 'react';
import './App.css';
import Homepage from "./pages/homepage/Homepage";
import {Route, Switch,Redirect} from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage"
import HeaderMenu from "./components/headerMenu/HeaderMenu";
import SignInSignUp from "./pages/sign-in-sign-up-page/SignInSignUp";
import {auth,createUserProfileDocument} from "./firebase/firebase.utils"
import {connect} from "react-redux"
import {setCurrentUser} from "./redux/user/user.action";



class App extends Component{
    // constructor() {  // after config redux
    //     super();
    //
    //     this.state={
    //         current_user: null
    //     }
    // }
    unSubscribeFromAuth = null;
    componentDidMount() {
        const {setCurrentUser} = this.props
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
                    // ,()=>{
                    //     console.log(this.state)
                    // }
                    // )
                    // console.log(snapshot.data())
                });
            }

            setCurrentUser(userAuth)
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
                    <Route exact path='/shop' component={ShopPage}/>
                    <Route exact path='/signIn' render={ ()=> currentUser?(<Redirect to="/" />):(<SignInSignUp/>)}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = ({user}) => ({
   currentUser : user.current_user
});

const mapDispatchToProps = dispatch =>({
   setCurrentUser:user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
