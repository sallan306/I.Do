import React from "react";


export function Input(props) {
  return (
    <div className="form-group">
      <input style={{

        border: 0,  
        background: props.secondaryColor, 
        color: props.fontColor,   
        }}className="form-control" {...props} />
    </div>
  );
}

