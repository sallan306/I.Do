import React from "react";

export function NavLinks() {
    return(
        <nav>
            <a href="/">
                i.Do  |
            </a>
            <a href="/Dashboard">
                |  View Guest List |
            </a>
            <a href="/Manage">
                |  Edit/Add Guests |
            </a>
            <a href="/Logout">
                |  Log Out
            {/* Add code here to make only appear on logged in pages? */}
            </a>
        </nav>
    )
};