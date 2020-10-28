import React, {Component} from 'react';
import {connect} from "react-redux"
import FormControl from "../formControl/FormControl";
import CustomButtom from "../customButton/CustomButtom";
import "./Sign-In.style.scss"
import {googleSignInStart,emailSignInStart} from "../../redux/user/user.action";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state ={
            email:'',
            password:''
        }
    }

    handleSubmit =async event => {
        event.preventDefault();
        const {emailSignInStart} = this.props;
        const {email,password} = this.state;

        emailSignInStart(email, password);

        // try{
        //     await auth.signInWithEmailAndPassword(email, password)
        //     this.setState({email:'', password:''})
        // }catch (e) {
        //     console.log(e.message)
        // }
    };

    handleChange = event => {
        const {name,value} = event.target;

        this.setState({[name]:value})
    };

    render() {
        const {googleSignInStart} = this.props;
        return (
            <div className="sign-in">
                <h2>I already hav an account.</h2>
                <span>Sing in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormControl
                        label="email"
                        type="email"
                        name="email"
                        handleChang={this.handleChange}
                        value={this.state.email}
                        required
                    />
                    <FormControl
                        label="password"
                        type="password"
                        name="password"
                        handleChang={this.handleChange}
                        value={this.state.password}
                        required
                    />

                    <div className="buttons">
                        <CustomButtom type="submit">Sign In</CustomButtom>
                        <CustomButtom type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In with Google</CustomButtom>

                    </div>
                </form>
            </div>
        );
    }
}

const mapToDispatchProps = dispatch =>({
    googleSignInStart : () => dispatch(googleSignInStart()),
    emailSignInStart : (email, password) => dispatch(emailSignInStart({email,password}))
});

export default connect(null, mapToDispatchProps)(SignIn);