import React from "react";
import "./form-control.style.scss"

const FormControl = ({handleChang, label, ...otherInputProps}) => (
    <div className="group">
        <input className="form-input" onChange={handleChang} {...otherInputProps}/>
        {
            // {`${otherProps.value.length ? 'shrink':''} form-input-label`}
            label ?
                (<label className={`${otherInputProps.value.length ? 'shrink':''} form-input-label`}>
                {label}
            </label>)
            :null
        }
    </div>
);

export default FormControl;