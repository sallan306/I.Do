import React from "react";




function Nav() {
  return (
    <div className="container-title">
      {/* This is where the title is styled. */}
       
      <div id="title">

        <h1 id="nav-title">i.Do</h1>
        <h2>the ultimate event planning app</h2>

      </div>
        
       
      <nav>
        <a href="/">
          i.Do  |
        </a>
        <a href="/Dashboard">
          |  View Guest List |
        </a>
        <a href="/Manage">
          |  Edit/Add Guests 
        </a>
      </nav>
      
    </div>
    
  );
}

export default Nav;