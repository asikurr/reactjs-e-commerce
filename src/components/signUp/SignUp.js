import React, {Component} from 'react';

import FormControl from "../formControl/FormControl";
import CustomButtom from "../customButton/CustomButtom";
import {auth,createUserProfileDocument} from "../../firebase/firebase.utils";

import "./signup-style.scss"


class SignUp extends Component {
    constructor() {
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password,confirmPassword} = this.state
        if(password !== confirmPassword){
            alert("Password does not Match !");
            return ;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password);
            await createUserProfileDocument(user,{displayName})

            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        }

        catch (e) {
           console.log("Function does not work!", e.message);
        }

    };

    handleChange = (event) => {
        const {name,value} = event.target;

        this.setState({[name]:value})
    }


    render() {
        const {displayName, email, password,confirmPassword} = this.state
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account.</h2>
                <span>Sign up with your email and password.</span>

                <form className="sig-up-form" onSubmit={this.handleSubmit}>
                    <FormControl
                    type="text"
                    name="displayName"
                    value={displayName}
                    label="Name"
                    onChange={this.handleChange}
                    required
                    />

                    <FormControl
                        type="email"
                        name="email"
                        value={email}
                        label="email"
                        onChange={this.handleChange}
                        required
                    />

                    <FormControl
                        type="password"
                        name="password"
                        value={password}
                        label="Password"
                        onChange={this.handleChange}
                        required
                    />

                    <FormControl
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        label="Confirm Password"
                        onChange={this.handleChange}
                        required
                    />

                    <CustomButtom type="submit">Sign Up</CustomButtom>
                </form>
            </div>
        );
    }
}

export default SignUp;