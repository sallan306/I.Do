import React from "react";



export var Test = [{ id: "1", firstName: "Lola", lastName:"Starfinder", email: "ScienceOfficer@mysticHealer.com", phone: "444-444-4444", address: "Room 7, Galactic Space Station"},
{ id: "2", firstName: "Lola", lastName:"Starfinder", email: "ScienceOfficer@mysticHealer.com", phone: "444-444-4444", address: "Room 7, Galactic Space Station"}];



export function PrintText(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}


//I think this will let us print something specific from database