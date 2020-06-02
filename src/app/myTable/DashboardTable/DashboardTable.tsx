import React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
//import './fonts.css';

import { Table, TableHeader, TableBody } from '@patternfly/react-table';

// const textFormatting = {
//   transforms: [textCenter],
//   cellTransforms: [textCenter]
// } as React.CSSProperties;

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

class DashboardTable extends React.Component<myProps, myState> {
  constructor(myProps) {
    super(myProps);

    const rowData: Array<row> = [];

    myProps.tableData.forEach(dataRow => {
      rowData.push({
        cells: [
          dataRow['namespace'],
          dataRow['node'],
          dataRow['periodStart'].toISOString(),
          dataRow['periodEnd'].toISOString(),
          dataRow['pod'],
          dataRow['podUsageCpuCoreSeconds']
        ]
      });
    });

    this.state = {
      columns: [
        myProps.columnTitle['namespace'],
        myProps.columnTitle['node'],
        myProps.columnTitle['periodStart'],
        myProps.columnTitle['periodEnd'],
        myProps.columnTitle['pod'],
        myProps.columnTitle['podUsageCpuCoreSeconds']
      ],
      rows: rowData
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps: myProps) {
    const rowData: Array<row> = [];

    nextProps.tableData.forEach(dataRow => {
      rowData.push({
        cells: [
          dataRow['namespace'],
          dataRow['node'],
          dataRow['periodStart'].toISOString(),
          dataRow['periodEnd'].toISOString(),
          dataRow['pod'],
          dataRow['podUsageCpuCoreSeconds']
        ]
      });
    });
    this.setState({ ...this.state, rows: rowData });
  }

  render() {
    return (
      <div>
        <Table key={'dataTable'} aria-label="Simple Table" cells={this.state.columns} rows={this.state.rows} > 
        {/* rowWrapper={} */}
          <TableHeader />
          <TableBody />
        </Table>
      </div>
    );
  }
}
export { DashboardTable };
