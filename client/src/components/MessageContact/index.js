import React from "react";

function MessageContact (props) {
    return (
        <li> {props.firstName} {props.lastName} {props.phone}, {props.email} </li>
    )
}

export default MessageContact; 