import React from 'react';
import { CirclePicker } from 'react-color';
import $ from "jquery"

class ColorPicker2 extends React.Component {
    state = {
      secondaryColor: '#fff',
      width: "100px"
    };
  
    handleChangeComplete = (color) => {
      this.setState({ secondaryColor: color.hex });
      this.props.changeSecondaryColor(this.state.secondaryColor)

    };

    render() {
      return (
        <div>
            <CirclePicker
                color={ this.state.secondaryColor }
                onChangeComplete={ this.handleChangeComplete }
                width = {this.state.width}
                
            />

        </div>
      )}

  }
  export default ColorPicker2