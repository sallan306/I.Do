import React from "react";
import { PromiseProvider } from "mongoose";

function Nav(props) {
  return (
    <div className="container-title">
      {/* This is where the title is styled. */}
       
      <div id="title" style={{background: props.secondaryColor,
                              color: props.fontColor}}>
        <div className="styleBox"></div>
        <h1 id="nav-title">i.Do</h1>
        <h2>the ultimate event planning app</h2>

      </div>

      
    </div>
    
  );
}

export default Nav;

