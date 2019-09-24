import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import { PanelGroup } from "react-bootstrap";
import { PrintText } from "../../PrintText";
import EditModal from "../../Elements/EditModal/index.js";

class ContactCard extends Component {
  render() {
    return (
      <PanelGroup
        accordion
        id="accordion-example"
        style={{ background: "transparent" }}
      >
        <Panel eventKey="1" style={{ border: 0, background: "transparent" }}>
          <Panel.Heading style={{ background: this.props.secondary }}>
            <Panel.Title toggle style={{ color: this.props.font }}>
              <PrintText>
                {this.props.firstName} {this.props.lastName}
              </PrintText>
            </Panel.Title>
          </Panel.Heading>

          <Panel.Body collapsible>
            <PrintText className="infoArea">
              <PrintText style={{ background: this.props.secondary }}>
                {this.props.phone}
                <br />
                {this.props.email}
              </PrintText>
              <PrintText style={{ background: this.props.secondary }}>
                {this.props.street}
                <br />
                {this.props.city} {this.props.state} {this.props.zipcode}
              </PrintText>
            </PrintText>
            <EditModal {...this.props} />
          </Panel.Body>
        </Panel>
      </PanelGroup>
    );
  }
}

export default ContactCard;
