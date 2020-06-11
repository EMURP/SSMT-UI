import React from 'react';
import { CalendarAltIcon } from '@patternfly/react-icons';
import { InputGroup, InputGroupText, TextInput, FormGroup } from '@patternfly/react-core';

type myProps={
  changeDate: Function;
  dateType: string;
  // currentDate: string;
}

class SimpleInputGroups extends React.Component<myProps> {
  constructor(myProps) {
    super(myProps);
  }

  render() {
    return (
      <React.Fragment>
        <FormGroup label={this.props.dateType}
          isRequired
          fieldId={this.props.dateType}
          // helperText={this.props.dateType}
          >
        <InputGroup>
          
          <TextInput
            name="textInput"
            id={this.props.dateType}
            type="date"
            aria-label="Input Date"
            onChangeCapture={event => this.props.changeDate(event.currentTarget.value)}
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
