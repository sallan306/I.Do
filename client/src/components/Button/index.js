import React from "react";



export function Button(props) {


    return (
      <button {...props}
                          style={{ 
                                  background: props.secondary, 
                                  color: props.font, 
                                  marginTop: props.topmargin,
                                  border: 0,
                                  float: props.float,
                                  width: props.width,
                                  marginLeft: props.marginleft,
                                  borderRadius: (props.borderRadius || 20),
                                  outline: "none",
                                }} 
                                  className={props.className || "btn-success"}>
        {props.children}
      </button>
    );
  };
