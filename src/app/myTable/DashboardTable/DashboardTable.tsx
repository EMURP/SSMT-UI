import React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { Table, TableHeader, TableBody, TableVariant,TableText } from '@patternfly/react-table';
import { Link } from 'react-router-dom';

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
          <TableText><Link to={`/projectlist/${ dataRow['namespace']}`}>{ dataRow['namespace']}</Link></TableText>,
          
          // dataRow['namespace'],
          dataRow['activation_time']
          // dataRow['node'],
          // dataRow['periodStart'].toISOString(),
          // dataRow['periodEnd'].toISOString(),
          // dataRow['pod'],
          // dataRow['podUsageCpuCoreSeconds']
        ]
      });
    });

    this.state = {
      columns: [
        myProps.columnTitle['namespace'],
        myProps.columnTitle['activation_time']
        // myProps.columnTitle['node'],
        // myProps.columnTitle['periodStart'],
        // myProps.columnTitle['periodEnd'],
        // myProps.columnTitle['pod'],
        // myProps.columnTitle['podUsageCpuCoreSeconds']
      ],
      rows: rowData
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps: myProps) {
    if (this.props.startDate !== nextProps.startDate || this.props.endDate !== nextProps.endDate) {
      const rowData: Array<row> = [];
      nextProps.tableData.forEach(dataRow => {
        rowData.push({
          cells: [
            <TableText><Link to={`/projectlist/${ dataRow['namespace']}`}>{ dataRow['namespace']}</Link></TableText>,
            // dataRow['namespace'],
           // dataRow['node'],
            //dataRow['periodStart'], //to iso string ()
            //dataRow['periodEnd'], // to iso string ()
            dataRow['activation_time']
            //dataRow['pod'],
            //dataRow['podUsageCpuCoreSeconds']
          ]
        });
      });
      this.setState({ ...this.state, rows: rowData });
    }
  }

  render() {
    return (
      <div>
        <Table key={'dataTable'} aria-label="Compact Table" variant={TableVariant.compact} cells={this.state.columns} rows={this.state.rows} caption = "List of projects"> 
        {/* rowWrapper={} */}
          <TableHeader />
          <TableBody />
        </Table>
      </div>
    );
  }
}
export { DashboardTable };
