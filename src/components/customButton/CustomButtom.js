import React from 'react';
import "./custom-button.style.scss"

const CustomButtom = ({children,isGoogleSignIn, ...otherInputProps}) => {
    return (
        <button className={`${isGoogleSignIn?'google-SignIn-button':''} custom-button`} {...otherInputProps}>
            {children}
        </button>
    );
}

export default CustomButtom;