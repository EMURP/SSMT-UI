import React, { EventHandler } from 'react';
import {
  Button,
  InputGroup,
  TextInput,
  Dropdown,
  DropdownToggle,
  DropdownItem
} from '@patternfly/react-core';



type myProps = {
  setReportType: Function;
  ReportType: string;
}

type myState = {
}


class ReportTypeDropdown extends React.Component<myProps,myState>{
  constructor(myProps) {
    super(myProps);
    this.state = {
    }
  }

  ReportType=(event: React.FormEvent<HTMLSelectElement>)=>{
    this.props.setReportType(event.currentTarget.value)
  }

  createDropDowns(key: string, reportTypes: Array<string>, onChange: Function, def: string ) {
    return(
      <React.Fragment>
        <label>Select Report Type</label>
      <select key={key} onChange={e=>onChange(e)} value={def} aria-label="Report Type">
         
        {reportTypes.map((i)=>{ 
          return(<option key={key+i} value={i}>{i}</option>)
        } )}
      </select>

      </React.Fragment>
      
    )
    
  }

  render() {
    const reportTypes: Array<string> = ['Standard Report', 'Analytical Report', 'Custom Report']
    return (
      
      <div>
        {this.createDropDowns("Report Type",reportTypes,this.ReportType,this.props.ReportType)}
      </div>
    );
  }
}

export default ReportTypeDropdown
