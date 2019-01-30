import React from "react";
import Checkbox from "../Checkbox";


function MessageContact (props) {
    return (

        <div>
          <li> {props.firstName} {props.lastName} {props.phone}, {props.email} </li>
          <Checkbox/>
        </div>
    );

export default MessageContact; 