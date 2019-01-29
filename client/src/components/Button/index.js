import React from "react";



export function Button(props) {


    return (
      <button {...props} style={{ 
                                  background: props.secondary, 
                                  color: props.font, 
                                  marginBottom: 10,
                                  border: 0}
                                } 
                                  className="btn btn-success">
        {props.children}
      </button>
    );
  };
