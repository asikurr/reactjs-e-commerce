import React from 'react';
import "./custom-button.style.scss"

const CustomButtom = ({children, ...otherInputProps}) => {
    return (
        <button className='custom-button' {...otherInputProps}>
            {children}
        </button>
    );
}

export default CustomButtom;