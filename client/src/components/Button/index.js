import React from "react";



export function Button(props) {

  function shouldFloatLeft() {
    if (!props.floatLeft) {
      console.log(props.floatLeft)
      return props.floatLeft;
    }
    else {
      console.log("hi")
      return "right"
    }
  }

    return (
      <button {...props} style={{ float: {shouldFloatLeft}, 
                                  background: props.secondaryColor, 
                                  color: props.fontColor, 
                                  marginBottom: 10,
                                  border: 0,
                                  marginLeft: "5%"}

                                } 
                                  className="btn btn-success">
        {props.children}
      </button>
    );
  };
