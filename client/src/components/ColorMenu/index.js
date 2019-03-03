import React from "react";
import $ from "jquery"
import './style.css';
import ColorPicker from "./ColorPicker";
import ColorPicker2 from "./ColorPicker2";
import ColorPickerFont from "./ColorPickerFont";


// var colorInterval = setInterval(this.randomColor,2000)

class ColorMenu extends React.Component {
    constructor(props) {
        super(props)

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
            circlePickerContainerClass: ""
        }
    } 

    randomColor() {
        // const colors = [
        //     "#f06292", "#f8bbd0", 
        //     "#ba68c8", "#e1bee7", 
        //     "#9575cd", "#d1c4e9", 
        //     "#7986cb", "#c5cae9", 
        //     "#64b5f6", "#bbdefb", 
        //     "#4dd0e1", "#b3e5fc", 
        //     "#4db6ac", "#b2ebf2", 
        //     "#fff176", "#c8e6c9", 
        //     "#ffb74d", "#ffecb3", 
        //     "#ff8a65", "#ffe0b2", 
        //     "#90a4ae", "#d9d9d9",
        //     "#000000", "#ffffff" ]  
        // var index = 0
        // index = Math.floor(Math.random()*12)
        // document.body.style.backgroundColor = colors[index]
    }

    toggleColors = () => {

        if (this.state.bar1Class === "bar1") {
            
            this.setState({
                bar1Class: "bar1 bar1change",
                bar2Class: "bar2 bar2change",
                bar3Class: "bar3 bar3change"
            })

        }
        else {
            
            this.setState({
                bar1Class: "bar1",
                bar2Class: "bar2",
                bar3Class: "bar3"
            })

        }

        $(".circle-picker-container").removeClass("circleChange")
        $(".buttonsContainer").toggleClass("openMenu")
        $(".dataContainer").toggleClass("openMenu2")

    }

    clickColor1 = () => {
        this.setState({
            primaryClass: "circle-picker-primary",
            secondaryClass: "circle-picker-secondary invisible",
            fontClass: "circle-picker-font invisible"
        })
    }
    clickColor2 = () => {
        this.setState({
            primaryClass: "circle-picker-primary invisible",
            secondaryClass: "circle-picker-secondary",
            fontClass: "circle-picker-font invisible"
        })
    }
    clickFont = () => {
        this.setState({
            primaryClass: "circle-picker-primary invisible",
            secondaryClass: "circle-picker-secondary invisible",
            fontClass: "circle-picker-font"
        })
    }

    render() {
        return (
            <div className="colorMenu">
                <div className="MenuContainer invisible" onClick={this.toggleColors}>
                    <div className={this.state.bar1Class}></div>
                    <div className={this.state.bar2Class}></div>
                    <div className={this.state.bar3Class}></div>
                </div>
                <div className={this.props.colorMenuClass}>
                    <div className="buttonBox" >
                        <button style={{
                                    background: this.props.primary
                                }}    
                                onClick={this.clickColor1}   
                                className="buttonPrimary">Primary</button>
                        <button style={{
                                    background: this.props.secondary
                                }}      
                                onClick={this.clickColor2}   
                                className="buttonSecondary">Secondary</button>
                        <button style={{
                                    background: this.props.font
                                }}    
                                onClick={this.clickFont}     
                                className="buttonFont">Font</button>
                    </div>
                    <div className={this.state.primaryClass}>
                        <ColorPicker        primary = {this.props.primary} 
                                            changePrimaryColor={this.props.changePrimaryColor} />
                    </div>
                    <div className={this.state.secondaryClass}>
                        <ColorPicker2       secondary = {this.props.secondary} 
                                            changeSecondaryColor={this.props.changeSecondaryColor}/>
                    </div>
                    <div className={this.state.fontClass}>
                        <ColorPickerFont    font = {this.props.font} 
                                            changeFontColor={this.props.changeFontColor}/>
                    </div>
                </div>
            </div>
        );
    }
    
  };
  export default ColorMenu;