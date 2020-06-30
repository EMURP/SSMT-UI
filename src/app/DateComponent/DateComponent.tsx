import React from 'react';
import { CalendarAltIcon } from '@patternfly/react-icons';
import { InputGroup, InputGroupText, TextInput, FormGroup } from '@patternfly/react-core';

type myProps = {
  changeDate: Function;
  dateType: string;
  // currentDate: Date;
}

const SimpleInputGroups: React.FunctionComponent<myProps> = props => (
  <React.Fragment>
    <FormGroup label={props.dateType}
      isRequired
      fieldId={props.dateType}
    // helperText={this.props.dateType}
    >
      <InputGroup>

        <TextInput
          name="textInput"
          id={props.dateType}
          type="date"
          aria-label="Input Date"
          onChangeCapture={event => props.changeDate(event.currentTarget.value)}
        // dateTime={this.props.currentDate.toDateString()}
        />
        <InputGroupText component="label" htmlFor="textInput9">
          <CalendarAltIcon />
        </InputGroupText>

      </InputGroup>

    </FormGroup>

  </React.Fragment>
);

export { SimpleInputGroups };
