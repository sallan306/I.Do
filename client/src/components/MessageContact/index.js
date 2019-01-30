import React from "react";

function MessageContact (props) {
    return (
        <li> {props.name}, {props.phone}, {props.email} </li>
    )
}

export default MessageContact; 