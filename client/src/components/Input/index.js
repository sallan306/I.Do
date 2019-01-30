import React from "react";


export function Input(props) {
  return (
    <div className="form-group">
    <label 
      htmlFor={props.name}
      name={props.name+"label"}
      style= {{
        opacity: .6,
        transition: "0.4s",
        position: "relative",
        top: "32px",
        zIndex: 10,
        pointerEvents: "none",
        left: "12px",
        color: props.font
      }}
    >{props.title}</label>


      <input {...props}
      className="form-control"
      name={props.name}
      onFocus={() => {document.getElementsByName(props.name+"label")[0].style.opacity = 0}}
      onBlur={() => { 
        if(document.getElementsByName(props.name)[0].value.length === 0) {
          document.getElementsByName(props.name+"label")[0].style.opacity = 0.6
        }
    
    }}
      style=
      {{
        border: 0,  
        background: props.secondary, 
        color: props.font,
        borderRadius: "20px"
        }}
 />
    </div>
  );
}

