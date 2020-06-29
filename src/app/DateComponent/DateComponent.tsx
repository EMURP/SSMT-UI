import React from 'react';
import { CalendarAltIcon } from '@patternfly/react-icons';
import { InputGroup, InputGroupText, TextInput, FormGroup } from '@patternfly/react-core';

type myProps={
  changeDate: Function;
  dateType: string;
  // currentDate: Date;
}


class SimpleInputGroups extends React.Component<myProps> {
  constructor(myProps) {
    super(myProps);
        
  }

  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
  
  render() {
    return (
      <React.Fragment>
        <FormGroup label={this.props.dateType}
          isRequired
          fieldId={this.props.dateType}
          >
        <InputGroup>
          
          <TextInput
            name="textInput"
            id={this.props.dateType}
            type="date"
            aria-label="Input Date"
            onChangeCapture={event => this.props.changeDate(event.currentTarget.value)}
            value={this.formatDate(new Date())}
          />
          <InputGroupText component="label" htmlFor="textInput9">
            <CalendarAltIcon />
          </InputGroupText>
          
        </InputGroup>

        </FormGroup>
       
      </React.Fragment>
    );
  }
}

export { SimpleInputGroups };
