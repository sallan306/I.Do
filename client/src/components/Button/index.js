import React from "react";



export function Button(props) {


    return (
      <button {...props} style={{ 
                                  background: props.secondary, 
                                  color: props.font, 
                                  marginTop: props.topmargin,
                                  border: 0,
                                  float: props.float,
                                  width: props.width,
                                  marginLeft: props.marginleft
                                }} 
                                  className="btn btn-success">
        {props.children}
      </button>
    );
  };
