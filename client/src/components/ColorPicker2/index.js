import React from 'react';
import { CirclePicker } from 'react-color';
import $ from "jquery"

class ColorPicker2 extends React.Component {
    state = {
      background: '#fff',
      width: "100px"
    };
  
    handleChangeComplete = (color) => {
      this.setState({ background: color.hex });

      $(".form-control").css("background", this.state.background)
      $("#title").css("background", this.state.background)
      $(".btn").css("background", this.state.background)
    };

    render() {
      return (
        <div>
            <CirclePicker
                color={ this.state.background }
                onChangeComplete={ this.handleChangeComplete }
                width = {this.state.width}
                
            />

        </div>
      )}

  }
  export default ColorPicker2