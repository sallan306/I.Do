import React from "react";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import Container from "../Elements/Container"
import ExcelModal from "../MenuBar/ExcelModal"
import CopyLinkModal from "../MenuBar/CopyLinkModal"
import MessageModal from "../MenuBar/MessageModal"
import NewContactModal from "../MenuBar/NewContactModal"
import LogoutModal from "../MenuBar/LogoutModal"
import $ from "jquery"




class MenuBar extends React.Component {
  
  toggleColors() {
    $(".circle-picker-container").toggleClass("circleChange")
  }
    render() {

      return (
        <Container  className="openMenu buttonsContainer col-md-6 col-md-offset-3"
                    >
            <ExcelModal     secondary={this.props.secondary}
                            font={this.props.font}
                            contacts={this.props.contacts}

            />
            <CopyLinkModal  eventID={this.props.eventID}
                            secondary={this.props.secondary}
                            font={this.props.font}
                            addNotification={this.props.addNotification}
            />

            <MessageModal 
                    name={this.props.userFirstName + " " + this.props.userLastName}
                    contacts={this.props.contacts}
                    secondary={this.props.secondary}
                    font={this.props.font} 
                    sendMessageButton={this.sendMessageButton}
            />
            <NewContactModal    
                    name={this.props.userFirstName + " " + this.props.userLastName}
                    contacts={this.props.contacts}
                    sendMessageButton={this.props.sendMessageButton}
                    handleInputChange={this.props.handleInputChange}
                    handleFormSubmit={this.props.handleFormSubmit}
                    firstName={this.props.firstName}
                    lastName={this.props.lastName}
                    email={this.props.email}
                    phone={this.props.phone}
                    street={this.props.street}
                    city={this.props.city}
                    state={this.props.state}
                    zipcode={this.props.zipcode}
                    comment={this.props.comment}
                    secondary={this.props.secondary}
                    font={this.props.font}
                />
                <Button className="btn btn-primary colorMenuButton" 
                        bsStyle="primary" 
                        secondary={this.props.secondary}
                        onClick={this.toggleColors}
                        style={{  background: this.props.secondary,
                                  color: this.props.font,
                                  border: 0,
                                  outline: "none"}}
                        >
                        <FontAwesomeIcon    icon={faPalette} 
                                            className="fontAwesome" 
                                            style={{color: this.props.font}}
                                            size="6x"
                                            fixedWidth 
                                            transform="shrink-6"/>
                </Button>

                <LogoutModal    secondary={this.props.secondary}
                                font={this.props.font}
                                loggedIn={this.props.loggedIn}
                                logOut={this.props.logOut}/>

            </Container>
      );
    }
  }
  
//   render (<GuestLink />);
export default MenuBar;