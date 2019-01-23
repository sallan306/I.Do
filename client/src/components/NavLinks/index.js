import React from "react";
import { Link } from 'react-router-dom';

export function NavLinks() {

    return(
        <nav>
            <Link className="linkHome" to="/">Home  |</Link>
            <Link className="linkLogOut" to="/Logout">|  Log Out</Link>
        </nav>
    )
    
};
