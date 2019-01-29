import React from "react";


export function Input(props) {
  return (
    <div className="form-group">
      <input style=
      {{
        border: 0,  
        background: props.secondary, 
        color: props.font,  
        Placeholder: "red" 
        }}
        className="form-control" {...props} />
    </div>
  );
}

