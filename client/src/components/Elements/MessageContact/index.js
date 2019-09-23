import React from "react";
import TextCheckbox from '../TextCheckbox'
import EmailCheckbox from '../EmailCheckbox'


function MessageContact (props) {
    return (
        <div>
          <li> {props.firstName} {props.lastName}</li>
          {props.messageType === "Text" ? <TextCheckbox {...props}/> : ""}
          {props.messageType === "Email" ? <EmailCheckbox {...props}/> : ""}
        </div>
    );
}

export default MessageContact; 