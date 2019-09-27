import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div className="form-group">
        <label
          htmlFor={this.props.name}
          name={this.props.name + "label"}
          style={{
            opacity: 0.6,
            transition: "0.4s",
            position: "relative",
            top: "32px",
            zIndex: 10,
            pointerEvents: "none",
            left: "12px",
            color: this.props.font,
            backgroundColor: this.props.secondary
          }}
        >
          {this.props.title}
        </label>

        <input
          {...this.props}
          className="form-control"
          name={this.props.name}
          onFocus={() => {
            document.getElementsByName(
              this.props.name + "label"
            )[0].style.opacity = 0;
          }}
          onBlur={() => {
            if (
              document.getElementsByName(this.props.name)[0].value.length === 0
            ) {
              document.getElementsByName(
                this.props.name + "label"
              )[0].style.opacity = 0.6;
            }
          }}
          style={{
            border: 0,
            background: this.props.secondary,
            color: this.props.font,
            borderRadius: "20px"
          }}
        />
      </div>
    );
  }
}

export default Input;
