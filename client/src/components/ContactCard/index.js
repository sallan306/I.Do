import React from "react";
import { Panel } from 'react-bootstrap';
import { PanelGroup } from 'react-bootstrap';
import { PrintText } from "../PrintText";
import {Button} from "../Button";
// import Checkbox from '../Checkbox';

function ContactCard(props) {
    return (
        <PanelGroup 
            accordion id="accordion-example" 
            style={{background: "transparent"}}
            >
            <Panel eventKey="1" style={{border: 0, background: "transparent"}}>
                <Panel.Heading style={{background: props.secondaryColor}}>
                    <Panel.Title toggle style={{color: props.fontColor}}>
                        <PrintText >
                            {props.firstName} {props.lastName}
                        </PrintText>
                    </Panel.Title >
                </Panel.Heading>

                <Panel.Body collapsible>
                    <div className="infoArea">
                    <PrintText >
                        <div className="contactInfoPrinted">
                        <PrintText style={{background: props.secondaryColor}}>
                            {props.phone}
                            <br/>
                            {props.email}
                        </PrintText>
                        <PrintText style={{background: props.secondaryColor}}>
                            {props.street}
                            <br/>
                            {props.city} {props.state}{props.zipcode}
                        </PrintText>
                        </div>
                        <div className="contactCommentPrinted">
                        <PrintText>
                            {props.comment}
                        </PrintText>
                        </div>
                        <Button className="editButton"
                        >
                        Edit
                        </Button>
                    </PrintText>
                    </div>
                </Panel.Body>
            </Panel>
            {/* <Checkbox
                name={props.id}
                isSelected={props.guestCheckboxes[props.id]}
                onCheckboxChange={props.handleCheckboxChange}
                key="checkbox"
            /> */}
        </PanelGroup>
    );
};

export default ContactCard;