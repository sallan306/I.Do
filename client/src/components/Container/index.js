import React from "react";

function Container(props) {
  return <div   id="containerId"
                className={props.className} 
                {...props}
                // style={{float : (props.float || "none"),
                //         marginLeft: (props.marginLeft || "30%"),
                //         marginRight: (props.marginRight || 0),
                //         overflow: (props.overflow || "none"),
                //         height: (props.height || "20vh"),
                //         width: (props.width || "40vw"),
                //         marginTop: (props.marginTop || "0"),
                //         paddingLeft : "0",
                //         paddingRight : "0"}}
                        >
    {props.children}
  </div>;
}

export default Container;
