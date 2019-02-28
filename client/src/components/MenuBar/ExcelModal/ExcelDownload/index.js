import React from "react";
import ReactExport from "react-export-excel";


const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;



class Download extends React.Component {
   
    // buttonStyle = { background: this.props.secondary,
    //                 color: this.props.font} 
    render(props) {
        return (
                <ExcelFile element={<button className="btn btn-default excelModalButton" 
                                            
                                    >
                                    Save Excel Spreadsheet
                                    </button>}>
                    <ExcelSheet data={this.props.contacts} name="Employees">
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