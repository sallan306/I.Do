import React from "react";
import $ from "jquery";
import "./style.css";
import ColorPicker from "./ColorPicker";
import ColorPicker2 from "./ColorPicker2";
import ColorPickerFont from "./ColorPickerFont";

// var colorInterval = setInterval(this.randomColor,2000)

class ColorMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paragraphClass: "hoverButtonText",
      primaryClass: "circle-picker-primary",
      secondaryClass: "circle-picker-secondary",
      fontClass: "circle-picker-font",
      bar1Class: "bar1",
      bar2Class: "bar2",
      bar3Class: "bar3",
      buttonsContainerClass: "",
      dataContainerClass: "",
      circlePickerContainerClass: "",
      button1Selected: false,
      button2Selected: false,
      button3Selected: true,
      colors: [
        "#fff176",
        "#ffb74d",
        "#ff8a65",
        "#c92216",
        "#f06292",
        "#ba68c8",
        "#9575cd",
        "#7986cb",
        "#64b5f6",
        "#0e2887",
        "#4dd0e1",
        "#4db6ac",
        "#13ad23",
        "#90a4ae",
        "#ffffff",
        "#000000",
      ]
    };
  }

  randomColor() {
  }

  toggleColors = () => {
    if (this.state.bar1Class === "bar1") {
      this.setState({
        bar1Class: "bar1 bar1change",
        bar2Class: "bar2 bar2change",
        bar3Class: "bar3 bar3change"
      });
    } else {
      this.setState({
        bar1Class: "bar1",
        bar2Class: "bar2",
        bar3Class: "bar3"
      });
    }

    $(".circle-picker-container").removeClass("circleChange");
    $(".buttonsContainer").toggleClass("openMenu");
    $(".dataContainer").toggleClass("openMenu2");
  };

  clickColor1 = () => {
    this.setState({
      primaryClass: "circle-picker-primary",
      secondaryClass: "circle-picker-secondary invisible",
      fontClass: "circle-picker-font invisible",
      button1Selected: true,
      button2Selected: false,
      button3Selected: false
    });
  };
  clickColor2 = () => {
    this.setState({
      primaryClass: "circle-picker-primary invisible",
      secondaryClass: "circle-picker-secondary",
      fontClass: "circle-picker-font invisible",
      button1Selected: false,
      button2Selected: true,
      button3Selected: false
    });
  };
  clickFont = () => {
    this.setState({
      primaryClass: "circle-picker-primary invisible",
      secondaryClass: "circle-picker-secondary invisible",
      fontClass: "circle-picker-font",
      button1Selected: false,
      button2Selected: false,
      button3Selected: true
    });
  };

  render() {
    return (
      <div className="colorMenu">
        <div className="MenuContainer invisible" onClick={this.toggleColors}>
          <div className={this.state.bar1Class}></div>
          <div className={this.state.bar2Class}></div>
          <div className={this.state.bar3Class}></div>
        </div>
        <div className={this.props.colorMenuClass}>
          <div className="buttonBox">
            <button
              style={{
                background: this.props.primary
              }}
              onClick={this.clickColor1}
              className={this.state.button1Selected ? "colorButton buttonPrimary colorButtonSelected" : "colorButton buttonPrimary colorButtonUnselected"}
            >
              Primary
            </button>
            <button
              style={{
                background: this.props.secondary
              }}
              onClick={this.clickColor2}
              className={this.state.button2Selected ? "colorButton buttonSecondary colorButtonSelected" : "colorButton buttonSecondary colorButtonUnselected"}
            >
              Secondary
            </button>
            <button
              style={{
                background: this.props.font
              }}
              onClick={this.clickFont}
              className={this.state.button3Selected ? "colorButton buttonFont colorButtonSelected" : "colorButton buttonFont colorButtonUnselected"}
            >
              Font
            </button>
          </div>
          <div className={this.state.primaryClass}>
            <ColorPicker
              colors={this.state.colors}
              primary={this.props.primary}
              changePrimaryColor={this.props.changePrimaryColor}
            />
          </div>
          <div className={this.state.secondaryClass}>
            <ColorPicker2
              colors={this.state.colors}
              secondary={this.props.secondary}
              changeSecondaryColor={this.props.changeSecondaryColor}
            />
          </div>
          <div className={this.state.fontClass}>
            <ColorPickerFont
              colors={this.state.colors}
              font={this.props.font}
              changeFontColor={this.props.changeFontColor}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ColorMenu;
