import React, { Component } from "react";
import TextCheckbox from "../TextCheckbox";
import EmailCheckbox from "../EmailCheckbox";

class MessageContact extends Component {
  render() {
    return (
      <div>
        {/* {props.onCheckBoxChange("checkbox activated")} */}
        <li>
          {" "}
          {this.props.firstName} {this.props.lastName}
        </li>
        {this.props.messageType === "Text" ? (
          <TextCheckbox
            {...this.props}
            onCheckBoxChange={this.props.onCheckBoxChange}
          />
        ) : (
          ""
        )}
        {this.props.messageType === "Email" ? (
          <EmailCheckbox
            {...this.props}
            onCheckBoxChange={this.props.onCheckBoxChange}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default MessageContact;
