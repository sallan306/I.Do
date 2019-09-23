import React from "react";
import { CirclePicker } from "react-color";

class ColorPicker extends React.Component {
  state = {
    primary: "#000000",
    width: "100px"
  };

  handleChangeComplete = color => {
    this.setState({ primary: color.hex });
    this.props.changePrimaryColor(this.state.primary);
    document.body.style.backgroundColor = this.state.primary;
  };

  render() {
    return (
      <div>
        <CirclePicker
          color={this.state.primary}
          onChangeComplete={this.handleChangeComplete}
          width={this.state.width}
          colors={this.props.colors}
        />
      </div>
    );
  }
}
export default ColorPicker;
