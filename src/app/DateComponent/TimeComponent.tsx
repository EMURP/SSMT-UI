import React from 'react';
import { CalendarAltIcon } from '@patternfly/react-icons';
import { InputGroup, InputGroupText, TextInput, FormGroup } from '@patternfly/react-core';

type myProps = {
    changeDate: Function;
    dateType: string;
    initialDate?: Date; // for unit testing/snapshots
    currentTime?: string;
}

type myState = {
    currentDate: Date;
    currentTime: string;
}

class TimeComponent extends React.Component<myProps, myState> {
    constructor(myProps: myProps) {
        super(myProps);
        this.state = {
            currentDate: myProps.initialDate || new Date(),
            currentTime: myProps.currentTime || "00:00"
        };
    }
    updateDateValue(newTime) {
        this.setState({ currentTime: newTime });
    }
    render() {
        return (
            <React.Fragment>
                <FormGroup label={this.props.dateType}
                    isRequired
                    fieldId={this.props.dateType}
                >
                    <InputGroup className="timergroup">

                        <TextInput
                            name="textInput"
                            id={this.props.dateType}
                            type="time"
                            aria-label="Input Time"
                            onChange={value => { this.props.changeDate(value); this.updateDateValue(value) }}
                            value={this.state.currentTime}
                        />

                        {/* <InputGroupText component="label" htmlFor="textInput9">
              <CalendarAltIcon />
            </InputGroupText> */}

                    </InputGroup>

                </FormGroup>

            </React.Fragment>
        );
    }
}

export { TimeComponent };
