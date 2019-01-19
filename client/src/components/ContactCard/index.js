import React from "react";
import { Panel } from 'react-bootstrap';
import { PanelGroup} from 'react-bootstrap';
import {PrintText, Test} from "../PrintText";



export default function ContactCard() {
    return(
        <PanelGroup accordion id="accordion-example">
            <Panel eventKey="1">
                <Panel.Heading>

                    <Panel.Title toggle>
                        
                        <PrintText>
                            {Test.firstName} {Test.lastName}
                        </PrintText>

                    </Panel.Title>

                </Panel.Heading>

                <Panel.Body collapsible>   

                    <PrintText className="infoArea">
                        <PrintText>{Test.phone}</PrintText>
                        <PrintText>{Test.email}</PrintText>
                    </PrintText>

                </Panel.Body>

            </Panel>
        </PanelGroup>
    )
};


