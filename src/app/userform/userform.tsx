import ReactDOM from 'react-dom';
import "@patternfly/react-core/dist/styles/base.css";
import '../app.css';
import axios from 'axios';

import React from 'react';
import {
    Form,
    FormGroup,
    TextInput,
    TextArea,
    FormSelectionOption,
    FormSelect,
    Checkbox,
    ActionGroup,
    Button,
    Radio
} from '@patternfly/react-core';

import {
    Table,
    TableHeader,
    TableBody,
} from '@patternfly/react-table';
import { useRowSelect } from 'react-table';

class DateForm_displaydata extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: '',
            value2: '',
            columns: [
                'Namespace',
                'Node',
                'Period End',
                'Period Start',
                'Pod',
                'Pod usage cpu core seconds'
            ],
            rows: [],
            cluster_data: [],
            isUpdated: false
        };



        this.handleTextInputChange1 = (value1: any) => {
            this.setState({ value1 });
            console.log(value1);
        };
        this.handleTextInputChange2 = (value2: any) => {
            this.setState({ value2 });
            console.log(value2);

        };

        // on submit calls the api  by appending start and end date and store the api data in cluster_data , 
        //if length of rows is greater than the api response then reset rows then push
        // values into the rows

        this.submit = () => {

            console.log(this.state.value1);
            console.log(this.state.value2);
            const api_url = 'https://3903aa74-2b7e-4ea9-85f1-04f11f67a2ad.mock.pstmn.io/list_project/' + 
            this.state.value1 + '/' + this.state.value2;
            axios.get(api_url).then(res => {
                this.setState({ cluster_data: res.data });
                console.log(this.state.cluster_data.length);
                if (this.state.rows.length > this.state.cluster_data.length) {
                    this.setState({ rows: [] });
                }
                
                this.state.rows = this.state.cluster_data.map(item => {
                    
                    return [
                        item.namespace,
                        item.node,
                        item.period_start,
                        item.period_end,
                        item.pod,
                        item.pod_usage_cpu_core_seconds
                    ];
                });
            });
            
            console.log(this.state.rows);
            
        }
    }

    render() {
        const { value1, value2, columns, rows } = this.state;
        
        return (
            <React.Fragment>

                <Form >
                    <FormGroup
                        label="Period Start Date"
                        isRequired
                        fieldId="simple-form-from-date"
                        helperText="Please provide the period start date"
                    >
                        <TextInput
                            isRequired
                            type="date"
                            id="simple-form-from-date"
                            name="simple-form-from-date"
                            aria-describedby="simple-form-from-date-helper"
                            value={value1}
                            onChange={this.handleTextInputChange1}
                        />
                    </FormGroup>
                    <FormGroup label="Period End Date" isRequired fieldId="simple-form-to-date" helperText="Please provide the period end date">
                        <TextInput
                            isRequired
                            type="date"
                            id="simple-form-to-date"
                            name="simple-form-to-date"
                            value={value2}
                            onChange={this.handleTextInputChange2}
                        />
                    </FormGroup>          
                    <ActionGroup >
                        <Button variant="primary" onClick={this.submit}>Submit form</Button>
                        </ActionGroup>
                </Form>
                <Table caption="Row Click Handler Table" cells={columns} rows={rows}>
                    <TableHeader />
                    <TableBody />
                </Table>
            </React.Fragment>
        );
    }
}

export { DateForm_displaydata };

