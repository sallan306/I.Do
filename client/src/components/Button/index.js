import React from "react";

export function Button(props) {
    return (
      <button {...props} style={{ float: "right", background: props.secondaryColor, color: props.fontColor, marginBottom: 10 }} className="btn btn-success">
        {props.children}
      </button>
    );
  };
