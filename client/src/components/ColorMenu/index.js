import React from "react";
import $ from "jquery"
import './style.css';
import ColorPicker from "./ColorPicker";
import ColorPicker2 from "./ColorPicker2";
import ColorPickerFont from "./ColorPickerFont";
// import API from '../utils/API';
    

function toggleColors() {

    $(".circle-picker-container").removeClass("circleChange")
    $(".bar1").toggleClass("bar1change")
    $(".bar2").toggleClass("bar2change")
    $(".bar3").toggleClass("bar3change")
    $(".buttonsContainer").toggleClass("openMenu")
    $(".dataContainer").toggleClass("openMenu2")
}

function clickColor1() {
    $(".circle-picker-primary").toggleClass(    "invisible", false)
    $(".circle-picker-secondary").toggleClass(  "invisible", true)
    $(".circle-picker-font").toggleClass(       "invisible", true)
}
function clickColor2() {
    $(".circle-picker-primary").toggleClass(    "invisible", true)
    $(".circle-picker-secondary").toggleClass(  "invisible", false)
    $(".circle-picker-font").toggleClass(       "invisible", true)
}
function clickFont() {
    $(".circle-picker-primary").toggleClass(    "invisible", true)
    $(".circle-picker-secondary").toggleClass(  "invisible", true)
    $(".circle-picker-font").toggleClass(       "invisible", false)
}

// function saveColors() {
//     API.
// }
export default function Button(props) {
    var button1Stlye = {
        background: props.primary,
        outline: "none"
    };
    var button2Stlye = {
        background: props.secondary,
        outline: "none"
    };
    var button3Stlye = {
        background: props.font,
        outline: "none"
    };
    if(props.button1Stlye){
        button1Stlye.background = props.primary;
    }
    if(props.button2Stlye){
        button2Stlye.background = props.secondary;
    }
    if(props.button3Stlye){
        button3Stlye.background = props.font;
    }
    return (
        <div className="colorMenu">
            <div className="MenuContainer invisible" onClick={toggleColors}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <div className="circle-picker-container">
                <div className="buttonBox" >
                    <button style={button1Stlye}    onClick={clickColor1}   className="buttonPrimary">Primary</button>
                    <button style={button2Stlye}    onClick={clickColor2}   className="buttonSecondary">Secondary</button>
                    <button style={button3Stlye}    onClick={clickFont}     className="buttonFont">Font</button>
                </div>
                <div className="circle-picker-primary">
                    <ColorPicker        primary = {props.primary} 
                                        changePrimaryColor={props.changePrimaryColor} />
                </div>
                <div className="circle-picker-secondary">
                    <ColorPicker2       secondary = {props.secondary} 
                                        changeSecondaryColor={props.changeSecondaryColor}/>
                </div>
                <div className="circle-picker-font">
                    <ColorPickerFont    font = {props.font} 
                                        changeFontColor={props.changeFontColor}/>
                </div>
                {/* <button style={button1Stlye} className="saveColors" onClick={saveColors}>Save</button> */}
            </div>
        </div>
    );
  };
