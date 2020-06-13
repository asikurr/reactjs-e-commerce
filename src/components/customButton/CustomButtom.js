import React from 'react';
// import {CustomButtonContainer} from "./custom-button.style"
import "./custom-button.style.scss"

// const CustomButtom = ({children,...Props}) => {
//     return (
//         <CustomButtonContainer {...Props}>
//             {children}
//         </CustomButtonContainer>
//     );
// };

const CustomButtom = ({children,isGoogleSignIn,inverted, ...otherInputProps}) => {
    return (
        <button className={`
        ${isGoogleSignIn?'google-SignIn-button':''}
         ${inverted?'inverted':''}
         custom-button`} {...otherInputProps}>
            {children}
        </button>
    );
};

export default CustomButtom;