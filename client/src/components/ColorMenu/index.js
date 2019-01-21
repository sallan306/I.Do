import React from "react";
import ColorPicker from "../ColorPicker"
import $ from "jquery"
import '../ColorMenu/style.css';
    
function animate() {

    $(".circle-picker-container").toggleClass("circleChange")
    $(".bar1").toggleClass("bar1change")
    $(".bar2").toggleClass("bar2change")
    $(".bar3").toggleClass("bar3change")
}

export default function Button(props) {

    return (
        <div>
            <div className="MenuContainer" onClick={animate}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <div className="circle-picker-container">
                <ColorPicker/>
            <div/>
        </div>
        </div>
    );
  };
