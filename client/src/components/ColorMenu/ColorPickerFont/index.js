import React from 'react';
import { CirclePicker } from 'react-color';

class ColorPickerFont extends React.Component {
    state = {
      background: '#fff',
      width: "100px"
    };
  
    handleChangeComplete = (color) => {
      this.setState({ background: color.hex });
      
      this.props.changeFontColor(this.state.background)
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
  export default ColorPickerFont