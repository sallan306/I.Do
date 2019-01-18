import React from "react";

function Nav() {
  return (
    <div>
      <div>
        <h1>i.Do</h1>
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