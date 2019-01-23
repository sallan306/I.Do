import React from 'react';
import { CirclePicker } from 'react-color';
import $ from "jquery"
import App from '../../App';
  

class ColorPicker extends React.Component {
    
    state = {
      primaryColor: '#000000',
      width: "100px"
    };
  
    handleChangeComplete = (color) => {
        this.setState({ primaryColor: color.hex });
        this.props.changePrimaryColor(this.state.primaryColor)
        
    };
    
    render() {
      return (
        <div>
            <CirclePicker
                color={ this.state.primaryColor }
                onChangeComplete={ this.handleChangeComplete }
                width = {this.state.width}
                
            />

        </div>
      )}

  }
  export default ColorPicker