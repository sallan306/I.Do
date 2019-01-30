import React from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;



class Download extends React.Component {
   
    dataSet1 = this.props.contacts
    render() {
        { console.log(this.props.contacts[0])}
        return (
            <ExcelFile element={<button>Download Data</button>}>
                <ExcelSheet data={this.dataSet1} name="Employees">
                    <ExcelColumn label="First Name" value="firstName"/>
                    <ExcelColumn label="Last Name" value="lastName"/>
                    <ExcelColumn label="Street" value="street"/>
                    <ExcelColumn label="City" value="city"/>
                    <ExcelColumn label="State" value="state"/>
                    <ExcelColumn label="Zipcode" value="zipcode"/>
                </ExcelSheet>
            </ExcelFile>
        );
    }
}

export default Download;