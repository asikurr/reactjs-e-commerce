import React from 'react';
import SignIn from "../../components/signIn/SignIn";
import SignUp from "../../components/signUp/SignUp";

import "./signinsignup-style.scss"



const SignInSignUp = () => {
    return (
        <div className="sign-in-and-sing-up">
             <SignIn/>
             <SignUp/>
        </div>
    );
}

export default SignInSignUp;