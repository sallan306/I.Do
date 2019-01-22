import React from "react";
import $ from "jquery"
import '../ColorMenu/style.css';
import ColorPicker from "../ColorPicker"
import ColorPicker2 from "../ColorPicker2"
import ColorPickerFont from "../ColorPickerFont"
    

function toggleColors() {

    $(".circle-picker-container").toggleClass("circleChange")
    $(".bar1").toggleClass("bar1change")
    $(".bar2").toggleClass("bar2change")
    $(".bar3").toggleClass("bar3change")
}

function clickColor1() {
    $(".circle-picker-primary").toggleClass(    "invisible", false)
    $(".circle-picker-secondary").toggleClass(  "invisible", true)
    $(".circle-picker-font").toggleClass(       "invisible", true)
    
    $(".buttonPrimary").toggleClass(            "clicked", true)
    $(".buttonSecondary").toggleClass(          "clicked", false)
    $(".buttonFont").toggleClass(               "clicked", false)
}
function clickColor2() {
    $(".circle-picker-primary").toggleClass(    "invisible", true)
    $(".circle-picker-secondary").toggleClass(  "invisible", false)
    $(".circle-picker-font").toggleClass(       "invisible", true)

    $(".buttonPrimary").toggleClass(            "clicked", false)
    $(".buttonSecondary").toggleClass(          "clicked", true)
    $(".buttonFont").toggleClass(               "clicked", false)
}
function clickFont() {
    $(".circle-picker-primary").toggleClass(    "invisible", true)
    $(".circle-picker-secondary").toggleClass(  "invisible", true)
    $(".circle-picker-font").toggleClass(       "invisible", false)
    

    $(".buttonPrimary").toggleClass(            "clicked", false)
    $(".buttonSecondary").toggleClass(          "clicked", false)
    $(".buttonFont").toggleClass(               "clicked", true)
}

export default function Button(props) {
    const someStyle = {};
    if(props.bkgColor){
        someStyle.background = props.bkgColor;
    }
    return (
        <div>
            <div className="MenuContainer" onClick={toggleColors}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <div className="circle-picker-container">
                <div className="buttonBox" >
                    <button style={someStyle}   className="buttonPrimary">Primary</button>
                    <button style={someStyle}   className="buttonSecondary">Secondary</button>
                    <button onClick={clickFont} className="buttonFont">Font</button>
                </div>
                <div className="circle-picker-primary">
                    <ColorPicker bkgColor = {props.bkgColor} changeBkgColor={props.changeBkgColor} />
                </div>
                <div className="circle-picker-secondary">
                    <ColorPicker2/>
                </div>
                <div className="circle-picker-font">
                    <ColorPickerFont/>
                </div>
            </div>
        </div>
    );
  };
