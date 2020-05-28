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



class SimpleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: '',
            value2: '',
            columns: [
                { title: 'Repositories' },
                'Branches',
                { title: 'Pull requests' },
                'Workspaces'
            ],
            
            data_table: '',
            rows: [
                {
                    cells: ['Repositories one', 'Branches one', 'Pull requests one', 'Workspaces one']
                },
                {
                    cells: ['Repositories two', 'Branches two', 'Pull requests two', 'Workspaces two']
                },
                {
                    cells: ['Repositories three', 'Branches three', 'Pull requests three', 'Workspaces three']
                }
            ]
            
            
        };



        this.handleTextInputChange1 = (value1: any) => {
            this.setState({ value1 });
            console.log(value1);
        };
        this.handleTextInputChange2 = (value2: any) => {
            this.setState({ value2 });
            console.log(value2);

        };
        // this.handleTextInputChange3 = value3 => {
        //   this.setState({ value3 });
        // };
        this.submit = () => {

            


            //const [data, setData] = React.useState([]);
            console.log(this.state.value1);
            console.log(this.state.value2);


            const api_url = 'https://3903aa74-2b7e-4ea9-85f1-04f11f67a2ad.mock.pstmn.io/list_project/' + this.state.value1 + '/' + this.state.value2
            // url = api_url;
            // console.log(url);
            // console.log(api_url);
            // this.setState({url:url});
            //console.log(this.state.url);

            axios.get(api_url).then(res => {
                //setData(res.data)
                console.log(res.data)

            })

        //     this.state.data_table = (
        //     <Table caption="Row Click Handler Table" cells={this.state.columns} rows={this.state.rows}>
        //     <TableHeader />
        //     <TableBody />
        //   </Table>)

        }


    }

    render() {
        const { value1, value2, columns, rows , url,data_table} = this.state;


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
                        <Button variant="primary"  value={url} onClick={this.submit}>Submit form</Button>
                        {/* <Button variant="secondary">Cancel</Button> */}
                    </ActionGroup>
                </Form>
                
                
                

            </React.Fragment>



        );
    }
}

export { SimpleForm };

