import ReactDOM from 'react-dom';
import "@patternfly/react-core/dist/styles/base.css";
import '../app.css';

import React, { FormEvent } from 'react';
import {
    Form,
    FormGroup,
    TextInput,
    TextArea,
    FormSelect,
    FormSelectOption,
    Checkbox,
    ActionGroup,
    Button,
    Radio
} from '@patternfly/react-core';
import { Displaydata } from './dataTable';
import { Fetchdata } from '@app/fetchdata/fetchdata';
import { FetchFilterdata } from '@app/fetchdata/fetchfilterdata';



type Records_date = {

    value1: string,
    value2: string,
    value3: string,
    value4: string,
    startDate: string,
    endDate: string,
    display_component: boolean

}

class HorizontalForm extends React.Component<{ Records_date }> {
    state: Records_date

    handleTextInputChange1: (value1: any) => void;
    handleTextInputChange2: (value2: any) => void;
    handleTextInputChange3: (value3: any) => void;
    handleTextInputChange4: (value: string, event: FormEvent<HTMLInputElement>) => void;
    onSubmit: (event: any) => void;

    constructor(props) {
        super(props);
        this.state = {
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            startDate: '',
            endDate: '',
            display_component: false


        };
        this.onSubmit = () => {

            this.setState({display_component:true})
            //this.state.display_component = true;
            console.log(this.state.display_component);


            //this.setState({ value4});
        };
        this.handleTextInputChange1 = value1 => {
            this.setState({ value1 });
        };
        this.handleTextInputChange2 = value2 => {
            this.setState({ value2 });
        };
        this.handleTextInputChange3 = value3 => {
            this.setState({ value3 });
        };
        this.handleTextInputChange4 = value4 => {
            this.setState({ value4 });
            //this.state.start_date = this.state.value1 + this.state.value3;
            //this.state.end_date = this.state.value2 + this.state.value4;
        };

    }

    render() {
        const { value1, value2, value3, value4, startDate, endDate } = this.state;
        const { display } = this.state.display_component;
        let dis_component;
        if (display) {
            dis_component=<FetchFilterdata startDate={value1 + value3} endDate={value2 + value4} />

        } else {
           dis_component= <Fetchdata />

        }


        return (
            <React.Fragment>
                <Form isHorizontal>
                    <FormGroup
                        label="start Date"
                        isRequired
                        fieldId="horizontal-form-name"
                        helperText="Please provide your full name"
                    >
                        <TextInput
                            value={value1}
                            isRequired
                            type="text"
                            id="horizontal-form-start-date"
                            aria-describedby="horizontal-form-name-helper"
                            name="horizontal-form-start-date"
                            onChange={this.handleTextInputChange1}
                        />
                    </FormGroup>
                    <FormGroup label="End date" isRequired fieldId="horizontal-form-end-date">
                        <TextInput
                            value={value2}
                            onChange={this.handleTextInputChange2}
                            isRequired
                            type="text"
                            id="horizontal-form-end-date"
                            name="horizontal-form-end-date"
                        />
                    </FormGroup>
                    <FormGroup label="start time" isRequired fieldId="horizontal-form-start-time">
                        <TextInput
                            value={value3}
                            onChange={this.handleTextInputChange3}
                            isRequired
                            type="text"
                            id="horizontal-form-start-time"
                            name="horizontal-form-start-time"
                        />
                    </FormGroup>
                    <FormGroup label="End Time" isRequired fieldId="horizontal-form-end-time">
                        <TextInput
                            value={value4}
                            onChange={this.handleTextInputChange4}
                            isRequired
                            type="text"
                            id="horizontal-form-end-time"
                            name="horizontal-form-end-time"
                        />
                    </FormGroup>


                    <ActionGroup>
                        <Button variant="primary" onClick={this.onSubmit}>
                            Submit form
                            </Button>
                    </ActionGroup>



                </Form>
                {
                    dis_component
                }

                {/* <Displaydata start_date={value1+value3} end_date={value2+value4}/> */}
            </React.Fragment>
        );
    }
}

export { HorizontalForm };