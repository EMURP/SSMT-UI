import React from 'react';
import { CalendarAltIcon } from '@patternfly/react-icons';
import { InputGroup, InputGroupText, TextInput } from '@patternfly/react-core';

type myProps={
  changeDate: Function;
  // currentDate: string;
}

class SimpleInputGroups extends React.Component<myProps> {
  constructor(myProps) {
    super(myProps);
  }

  render() {
    return (
      <React.Fragment>
        <InputGroup>
          <InputGroupText component="label" htmlFor="textInput9">
            <CalendarAltIcon />
          </InputGroupText>
          <TextInput
            name="textInput9"
            id="textInput9"
            type="date"
            aria-label="Date input example"
            // value={this.props.currentDate}
            onChangeCapture={event => this.props.changeDate(event.currentTarget.value)}
          />
        </InputGroup>
      </React.Fragment>
    );
  }
}

export { SimpleInputGroups };
