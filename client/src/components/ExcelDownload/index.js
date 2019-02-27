import React from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;



class Download extends React.Component {
   
    // buttonStyle = { background: this.props.secondary,
    //                 color: this.props.font} 
    render(props) {
        { console.log(this.props.contacts)}
        return (
                <ExcelFile element={<button className="btn btn-primary excelButton" 
                                            style={ {   background: this.props.secondary, 
                                                        color: this.props.font,
                                                        borderRadius: 0,
                                                        outline: "none",
                                                        border: 0}}
                                    >
                                    {/* Download as Excel */}
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