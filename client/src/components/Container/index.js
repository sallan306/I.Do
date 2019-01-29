import React from "react";

function Container(props) {
  return <div id="containerId"className={`container${props.fluid ? "-fluid" : ""}`} {...props}>
    {props.children}
  </div>;
}

export default Container;
