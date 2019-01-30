import React from "react";
import Checkbox from '../Checkbox'


function MessageContact (props) {
    return (
        <div>
          <li> {props.firstName} {props.lastName}</li>
          <Checkbox {...props}/>
        </div>
    );
}

export default MessageContact; 