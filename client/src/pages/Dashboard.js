import React from "react";
import { Panel, PanelGroup} from 'react-bootstrap';
import { PrintText, Test}  from "../components/PrintText";
import Container from "../components/Container";



function Dashboard () {
    return (
      
    <div>
       <Container>
       
        <h1 style={{textAlign:"center"}}>i.Do Dashboard</h1>
        <PanelGroup accordion id="accordion-example">
            <Panel eventKey="1">
                <Panel.Heading>

                    <Panel.Title toggle>
                        
                    <PrintText>
                        {Test.firstName}{Test.lastName}
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
     </Container>
    </div>
    );
};

export default Dashboard;