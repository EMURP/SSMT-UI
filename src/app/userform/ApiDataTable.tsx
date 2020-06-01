import React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';
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
  } from "@patternfly/react-core";
import axios from 'axios';

type dataObject = {

    namespace: string;
    // node: string;
    // pod: string;
    // podUsageCpuCoreSeconds: string;
    // periodEnd: Date;
    // periodStart: Date;


}


type myProps = {
  title: object;
  clusterData: Array<object>;
  startDate: Date;
  endDate: Date;
};

type myState = {
  columns: Array<object | string>;
  rows: Array<row>;
};

type row = {
  cells: cells;
};

type cells = Array<string>;

class DashboardTable extends React.Component<myProps, myState> {
  constructor(myProps) {
    super(myProps);

    const rowData: Array<row> = [];


    this.submit = () => {

        axios.get("https://3903aa74-2b7e-4ea9-85f1-04f11f67a2ad.mock.pstmn.io/list_projects/2020-05-30T23:59:59Z/2020-05-20T00:09:00Z")
        .then(res => {
            const tableData: Array<dataObject> = [];


        })
        myProps.clusterData.forEach(dataRow => {
    
            rowData.push({
              cells: [
                dataRow['namespace'],
                
              ]
            });
       
        });

    }

    

    this.state = {
      columns: [
        myProps.title['namespace'],
              ],
      rows: rowData
    };
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <React.Fragment>
        <Form>
          <ActionGroup>
            <Button variant="primary" onClick={this.submit}>
              Submit form
            </Button>
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
export { DashboardTable };