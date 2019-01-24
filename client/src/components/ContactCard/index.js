import React from "react";
import { Panel } from 'react-bootstrap';
import { PanelGroup } from 'react-bootstrap';
import { PrintText } from "../PrintText";
// import Checkbox from '../Checkbox';

function ContactCard(props) {
    return (
        <PanelGroup accordion id="accordion-example">
            <Panel eventKey="1">
                <Panel.Heading>
                    <Panel.Title toggle>
                        <PrintText>
                            {props.firstName} {props.lastName}
                        </PrintText>
                    </Panel.Title>
                </Panel.Heading>

                <Panel.Body collapsible>
                    <PrintText className="infoArea">
                        <PrintText>
                            {props.phone}
                            {props.email}
                        </PrintText>
                        <PrintText>
                            {props.address}
                            {props.city}
                            {props.state}
                            {props.zipcode}
                        </PrintText>
                    </PrintText>
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