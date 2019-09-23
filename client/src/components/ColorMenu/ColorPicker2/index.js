import React from "react";
import { CirclePicker } from "react-color";

class ColorPicker2 extends React.Component {
  state = {
    secondary: "#fff",
    width: "100px"
  };

  handleChangeComplete = color => {
    this.setState({ secondary: color.hex });
    this.props.changeSecondaryColor(this.state.secondary);
  };

  render() {
    return (
      <div>
        <CirclePicker
          color={this.state.secondary}
          onChangeComplete={this.handleChangeComplete}
          width={this.state.width}
          colors={this.props.colors}
        />
      </div>
    );
  }
}
export default ColorPicker2;
