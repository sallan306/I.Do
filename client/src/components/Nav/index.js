import React from "react";
import { Link } from 'react-router-dom';



function Nav() {
  return (
    <div className="container-title">
      {/* This is where the title is styled. */}
       
      <div id="title">

        <h1 id="nav-title">i.Do</h1>
        <h2>the ultimate event planning app</h2>

      </div>
        
       
      <nav>
        <Link to="/">i.Do  |</Link>
        <Link to="/Dashboard">|  View Guest List |</Link>
        <Link to="/Manage">|  Edit/Add Guests </Link>
      </nav>
      
    </div>
    
  );
}

export default Nav;