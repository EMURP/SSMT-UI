import ReactDOM from "react-dom";
import "@patternfly/react-core/dist/styles/base.css";
import "../app.css";
import axios from "axios";

import React from "react";
import {
  Form,
  FormGroup,
  TextInput,
  TextArea,

  FormSelect,
  Checkbox,
  ActionGroup,
  Button,
  Radio
} from "@patternfly/react-core";

import { Table, TableHeader, TableBody } from "@patternfly/react-table";
import { useRowSelect } from "react-table";
//interface state = {};





class Displaydata extends React.Component<{ startDate, endDate }> {
  submit: () => void;
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        "Namespace"
        // "Node",
        // "Period End",
        // "Period Start",
        // "Pod",
        // "Pod usage cpu core seconds"
      ],
      rows: [],
      cluster_data: [],
      isUpdated: false
    };

    // on submit calls the api  by appending start and end date and store the api data in cluster_data ,
    //if length of rows is greater than the api response then reset rows then push
    // values into the rows

    this.submit = () => {
      console.log(this.props.startDate.toISOString());
      console.log(this.props.endDate.toISOString());
      const api_url =
        "https://3903aa74-2b7e-4ea9-85f1-04f11f67a2ad.mock.pstmn.io/list_project/" +
        this.props.startDate.toISOString() +
        "/" +
        this.props.endDate.toISOString();
      console.log(api_url);
      axios.get("https://3903aa74-2b7e-4ea9-85f1-04f11f67a2ad.mock.pstmn.io/list_projects/2020-05-15/2020-05-28").then(res => {

        const cluster_data = res.data;
        this.setState({ cluster_data: res.data });
        console.log(this.state.cluster_data.length);
        

        this.state.rows = this.state.cluster_data.map(item => {

          return [
            item.namespace
            // item.node,
            // item.period_start,
            // item.period_end,
            // item.pod,
            // item.pod_usage_cpu_core_seconds
          ];
        });
      });
      if (this.state.rows.length > this.state.cluster_data.length) {
        this.setState({ rows: [] });
      }


    };
    
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <React.Fragment>
        {/* <Form>
          <ActionGroup>
            <Button variant="primary" onClick={this.submit}>
              Submit form
            </Button>
          </ActionGroup>
        </Form> */}

        <Table caption="Row Click Handler Table" cells={columns} rows={rows}>
          <TableHeader />
          <TableBody />
        </Table>
      </React.Fragment>
    );
  }
}

export { Displaydata };
