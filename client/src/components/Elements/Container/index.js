import React from "react";

function Container(props) {
  return <div   id="containerId"
                className={props.className} 
                {...props}
                        >
    {props.children}
  </div>;
}

export default Container;
