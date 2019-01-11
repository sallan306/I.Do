import React, { Component } from "react";
import AddressBlock from './addressBlock';

class GoogleForm extends Component{
    state = {
        firstName : "",
        lastName: "",
        address: ""
    }

    updateAddressSize(){
        
    }

    render(){
        return(
            <div>Form goes here
                <form>
                    <div>
                    <AddressBlock />
                </form>
            </div>
        );
    }
}

export default GoogleForm;