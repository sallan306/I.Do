import React from 'react';
import { CirclePicker } from 'react-color';
import $ from "jquery"

function rgb2hex(rgb){
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
     ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
   }
   
   $('button').click(function(){
       var hex = rgb2hex( $('input').val() );
       $('.result').html( hex );
   });
  

class ColorPicker extends React.Component {
    state = {
      background: '#fff',
      width: "100px"
    };
  
    handleChangeComplete = (color) => {
      this.setState({ background: color.hex });
      $("body").css("background", this.state.background)
      console.log(this.state.background)

      var hexBackground = rgb2hex(this.state.background)
      console.log(hexBackground)
      
      $("#title").css("background", hexBackground)
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
  export default ColorPicker