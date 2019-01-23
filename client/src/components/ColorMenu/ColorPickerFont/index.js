import React from 'react';
import { CirclePicker } from 'react-color';

class ColorPickerFont extends React.Component {
    state = {
      background: '#fff',
      width: "100px",
    };
  
    handleChangeComplete = (color) => {
      this.setState({ background: color.hex });
      
      this.props.changeFontColor(this.state.background)
    };

    render() {

      const colors = [
        "#f06292", "#f8bbd0", 
        "#ba68c8", "#e1bee7", 
        "#9575cd", "#d1c4e9", 
        "#7986cb", "#c5cae9", 
        "#64b5f6", "#bbdefb", 
        "#4dd0e1", "#b3e5fc", 
        "#4db6ac", "#b2ebf2", 
        "#fff176", "#c8e6c9", 
        "#ffb74d", "#ffecb3", 
        "#ff8a65", "#ffe0b2", 
        "#90a4ae", "#d9d9d9",
        "#000000", "#ffffff" ]

      return (
        <div>
            <CirclePicker
                color={ this.state.background }
                onChangeComplete={ this.handleChangeComplete }
                width = {this.state.width}
                colors = {colors}
                
            />

        </div>
      )}

  }
  export default ColorPickerFont