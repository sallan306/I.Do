import React from "react";
import { Panel } from 'react-bootstrap';
import { PanelGroup } from 'react-bootstrap';
import { PrintText } from "../PrintText";
import EditModal from "../EditModal";

// import Checkbox from '../Checkbox';

function ContactCard(props) {
    return (
        <PanelGroup 
            accordion id="accordion-example" 
            style={{background: "transparent"}}
            >
            <Panel eventKey="1" style={{border: 0, background: "transparent"}}>
                <Panel.Heading style={{background: props.secondary}}>
                    <Panel.Title toggle style={{color: props.font}}>
                        <PrintText >
                            {props.firstName} {props.lastName}
                        </PrintText>
                    </Panel.Title >
                </Panel.Heading>

                <Panel.Body collapsible>
                    <PrintText className="infoArea" >
                        <PrintText style={{background: props.secondary}}>
                            {props.phone}
                            <br/>
                            {props.email}
                        </PrintText>
                        <PrintText style={{background: props.secondary}}>
                            {props.street}
                            <br/>
                            {props.city} {props.state}{props.zipcode}
                        </PrintText>
                    </PrintText>
                    <EditModal guestID={props._id}/>
                </Panel.Body>
            </Panel>
            {/* <Checkbox
                name={props.id}
                isSelected={props.guestCheckboxes[props.id]}
                onCheckboxChange={props.handleCheckboxChange}
                // key="checkbox"
            /> */}
        </PanelGroup>
    );
};

export default ContactCard;