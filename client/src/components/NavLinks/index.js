import React from "react";
import { Link } from 'react-router-dom';

export function NavLinks() {

    return(
        <nav>
            <Link className="linkHome" to="/">i.Do  |</Link>
            <Link className="linkDash" to="/Dashboard">|  View Guest List  |</Link>
            <Link className="linkMng" to="/Manage">|  Edit/Add Guests  |</Link>
            <Link className="linkLogOut" to="/Logout">|  Log Out</Link>
        </nav>
    )
    
};
