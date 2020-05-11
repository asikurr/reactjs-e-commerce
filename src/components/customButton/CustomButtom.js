import React from 'react';
import "./custom-button.style.scss"

const CustomButtom = ({children,isGoogleSignIn,inverted, ...otherInputProps}) => {
    return (
        <button className={`
        ${isGoogleSignIn?'google-SignIn-button':''}
         ${inverted?'inverted':''}
         custom-button`} {...otherInputProps}>
            {children}
        </button>
    );
}

export default CustomButtom;