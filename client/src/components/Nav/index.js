import React from "react";
import { Link } from 'react-router-dom';
import $ from "jquery"



function Nav() {
  return (
    <div className="container-title">
      {/* This is where the title is styled. */}
       
      <div id="title">
        <div class="styleBox"></div>
        <h1 id="nav-title">i.Do</h1>
        <h2>the ultimate event planning app</h2>

      </div>
        
       
      <nav>
        <Link className="linkHome" to="/">Home Page</Link>//
        <Link className="linkDash" to="/Dashboard">View Guest List</Link>//
        <Link className="linkMng" to="/Manage">Edit Guest List</Link>
      </nav>
      
    </div>
    
  );
}

export default Nav;