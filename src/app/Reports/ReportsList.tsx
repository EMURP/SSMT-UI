import React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { Table, TableHeader, TableBody, TableVariant, TableText } from '@patternfly/react-table';
import { Link } from 'react-router-dom';
import { Card } from '@patternfly/react-core';

type myProps = {
  columnTitle: object;
  tableData: Array<object>;
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

class ReportsList extends React.Component<myProps, myState> {
  constructor(myProps) {
    super(myProps);

    const rowData: Array<row> = [];
    console.log(myProps.tableData);
    myProps.tableData.forEach(dataRow => {
      rowData.push({
        cells: [
          <TableText key={`/projectlist/${dataRow['namespace']}`}>
            <Link to={`/projectlist/${dataRow['namespace']}`} key={`/projectlist/${dataRow['namespace']}`}>
              {dataRow['namespace']}
            </Link>
          </TableText>,
          // dataRow['namespace'],
          dataRow['activationTime']
          // dataRow['node'],
          // dataRow['periodStart'].toISOString(),
          // dataRow['periodEnd'].toISOString(),
          // dataRow['pod'],
          // dataRow['podUsageCpuCoreSeconds']
        ]
      });
    })

    this.state = {
      columns: [
        myProps.columnTitle['namespace'],
        myProps.columnTitle['activationTime']
        // myProps.columnTitle['node'],
        // myProps.columnTitle['periodStart'],
        // myProps.columnTitle['periodEnd'],
        // myProps.columnTitle['pod'],
        // myProps.columnTitle['podUsageCpuCoreSeconds']
      ],
      rows: rowData
    };
  }


  shouldComponentUpdate(nextProps: myProps,nextState: myState){
    console.log(nextProps.tableData);
    console.log(JSON.stringify(nextProps)!== JSON.stringify(this.props))
    return JSON.stringify(nextProps)!== JSON.stringify(this.props)
  }

  UNSAFE_componentWillReceiveProps(nextProps: myProps) {
      const rowData: Array<row> = [];

      nextProps.tableData.forEach(dataRow => {
        rowData.push({
          cells: [
            <TableText key={`/projectlist/${dataRow['namespace']}`}>
              <Link to={`/projectlist/${dataRow['namespace']}`} key={`/projectlist/${dataRow['namespace']}`}>
              {dataRow['namespace']} 
              </Link>
            </TableText>,
            // dataRow['namespace'],
            dataRow['activationTime']
            // dataRow['node'],
            // dataRow['periodStart'].toISOString(),
            // dataRow['periodEnd'].toISOString(),
            // dataRow['pod'],
            // dataRow['podUsageCpuCoreSeconds']
          ]
        });
      });
      this.setState({ ...this.state, rows: rowData });
  }

  render() {
    return (
      <div>
        <Table
          key={'dataTable'}
          aria-label="Compact Table"
          variant={TableVariant.compact}
          cells={this.state.columns}
          rows={this.state.rows}
          caption="List of reports"
        >
          {/* rowWrapper={} */}
          <TableHeader />
          <TableBody />
        </Table>
      </div>
    );
  }
}
export default ReportsList;
