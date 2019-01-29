import React from "react";

function Nav(props) {
  return (
    <div className="container-title">
      {/* This is where the title is styled. */}
       
      <div id="title" style={{background: props.secondary,
                              color: props.font}}>
        <div className="styleBox">
          <h1 id="nav-title">i.Do</h1>
          <h2 >the ultimate event planning app</h2>
        </div>
      </div>

      
    </div>
    
  );
}

export default Nav;

