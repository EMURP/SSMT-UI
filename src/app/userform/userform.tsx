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

class SimpleForm extends React.Component {
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

        this.submit = () => {

            console.log(this.state.value1);
            console.log(this.state.value2);
            // const cell =["openshift-monitoring",
            // "crc-w6th5-master-0",
            // "2020-05-20T00:09:00Z",
            // "2020-05-30T23:59:59Z",
            // "alertmanager-main-0",
            // 73.01483999999998]

            // this.state.rows.push(cell);

            const api_url = 'https://3903aa74-2b7e-4ea9-85f1-04f11f67a2ad.mock.pstmn.io/list_project/' + this.state.value1 + '/' + this.state.value2

            axios.get(api_url).then(res => {

                res.data.map(item => {

                    const cell1 = item.namespace;
                    const cell2 = item.node;
                    const cell3 = item.period_start;
                    const cell4 = item.period_end;
                    const cell5 = item.pod;
                    const cell6 = item.pod_usage_cpu_core_seconds;


                    const cell = [] as any
                    //cell.push(item.namespace,)
                   // this.state.rows.push({ cells: [item.namespace, item.node, item.period_start, item.period_end, item.pod, item.pod_usage_cpu_core_seconds] });
                    this.state.rows.push(cell1,cell2,cell3,cell4,cell5,cell6);

                })
            })

            this.setState({ isUpdated: true })
        }
    }

    render() {
        const { value1, value2, columns, rows, isUpdated } = this.state;
        let datatable;

        if (isUpdated) {
            const { columns, rows } = this.state;
            console.log(rows);
            datatable = <Table caption="Row Click Handler Table" cells={columns} rows={rows}>
                <TableHeader />
                <TableBody />
            </Table>
        } else {
            datatable = <Table caption="No data for table" cells={columns} rows={rows}>
                <TableHeader />
                <TableBody />
            </Table>
        }


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
                        {/* <Button variant="secondary">Cancel</Button> */}
                    </ActionGroup>
                </Form>
                {datatable}
            </React.Fragment>
        );
    }
}

export { SimpleForm };

