import React from "react";

import ReactDOM from 'react-dom';
import "@patternfly/react-core/dist/styles/base.css";
//import './fonts.css';

import {
  Table,
  TableHeader,
  TableBody,
  textCenter,
} from '@patternfly/react-table';

type myProps={}

type myState = {
    columns: Array<object | string >;
    rows: Array<object >;

}

const textFormatting = {

    transforms: [textCenter],
    cellTransforms: [textCenter]

} as React.CSSProperties

class SimpleTable extends React.Component<myProps,myState> {
  constructor(myProps) {
    super(myProps);
    this.state = {

      columns: [
                    { 
                        title: <div style={textFormatting}>Sr No</div>, 
                    },
                    {
                        title: <div style={textFormatting}> Project Name</div>,
                    },
                    {
                        title: <div style={textFormatting}> No. of Nodes </div>,
                    },
               
                ],

      rows:     [
                    {
                        cells: ['1', 'AI COE', '37', ]
                    },
                    {
                        cells: ['2', 'Teckton', '19']
                    },
                    {
                        cells: ['3', 'Chris', '64']
                    },
   
                ]

     
    };
}
       
 
  render() {
    // const { columns, rows } = this.state;
    return (
      <Table aria-label="Simple Table" cells={this.state.columns} rows={this.state.rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
export { SimpleTable };