import React from "react";


export function Input(props) {
  return (
    <div className="form-group">
      <input style={{

        border: 0, 
        borderRadius: "10px", 
        background: props.secondaryColor, 
        color: props.fontColor,
        '::placeholder': {color: "red", opacity: 1},
        ':-ms-input-placeholder': {color: "red"},
        '::-ms-input-placeholder': {color: "red"}
        
        }}className="form-control" {...props} />
    </div>
  );
}

