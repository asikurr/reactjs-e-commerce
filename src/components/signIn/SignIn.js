import React, {Component} from 'react';
import FormControl from "../formControl/FormControl";
import CustomButtom from "../customButton/CustomButtom";
import "./Sign-In.style.scss"
import {auth,signInWithGoogle} from "../../firebase/firebase.utils";

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
        const {email,password} = this.state
        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email:'', password:''})
        }catch (e) {
            console.log(e.message)
        }
    }

    handleChange = event => {
        const {name,value} = event.target;

        this.setState({[name]:value})
    }

    render() {
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
                        <CustomButtom onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButtom>

                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;