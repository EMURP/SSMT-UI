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
import { Fetchdata } from '@app/fetchdata/fetchdata';
import { FetchFilterdata } from '@app/fetchdata/fetchfilterdata';


class HorizontalForm extends React.Component<{},{value1:string,value2:string,value3:string,value4:string,startDate?:string,endDate?:string,display_component:string}>{
        constructor(props) {
        super(props);
        this.state = {
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            startDate: '',
            endDate: '',
            display_component: 'fetch_data'


        };
       
        this.handleDisplay = this.handleDisplay.bind(this);
        

    }

    handleTextInputChange1 = (value1: any) => {
        this.setState({ value1 });
    };
    handleTextInputChange2 = (value2: any) => {
        this.setState({ value2 });
    };
    handleTextInputChange3 = (value3: any) => {
        this.setState({ value3 });
    };
    handleTextInputChange4 = (value4: any) => {
        this.setState({ value4 });
        //this.state.start_date = this.state.value1 + this.state.value3;
        //this.state.end_date = this.state.value2 + this.state.value4;
    };
    handleDisplay() {
        this.setState({display_component: 'filter_data'});
      }

    render() {
        const { value1, value2, value3, value4} = this.state;
        let dis_component: {} | null | undefined;
        if (this.state.display_component === 'filter_data') {
            dis_component=<FetchFilterdata  startDate={value1 + value3} endDate={value2 + value4} />

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
                        <Button variant="primary" onClick={this.handleDisplay}>
                            Submit form
                            </Button>
                    </ActionGroup>
                </Form>
                {
                    dis_component
                }                
            </React.Fragment>
        );
    }
}

export { HorizontalForm };