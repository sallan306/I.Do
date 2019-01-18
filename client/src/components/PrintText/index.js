import React from "react";



export var Test = {firstName: "Lola", lastName:"Starfinder", email: "ScienceOfficer@mysticHealer.com", phone: "444-444-4444"};



export function PrintText(props) {
    return (
        <div>
            {props.children};
        </div>
    )
}


//I think this will let us print something specific from database