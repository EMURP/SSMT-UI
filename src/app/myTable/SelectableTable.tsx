import ReactDOM from 'react-dom';
import "@patternfly/react-core/dist/styles/base.css";

import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  sortable,
  SortByDirection,
  headerCol,
  TableVariant,
  expandable,
  cellWidth
} from '@patternfly/react-table';
import {
    Checkbox
} from '@patternfly/react-core';

type myProps={
  columnTitle: object;
  tableData: Array<object>;
}

type myState = {
    columns: Array<object | string >;
    rows: Array<row >;
    canSelectAll: boolean;

}

type row={
    cells: cells;
    selected?: boolean;
}

type cells=Array<string>;

class SelectableTable extends React.Component<myProps,myState>{
  constructor(myprops) {
    super(myprops);
    const rowData: Array<row> = [];
    myprops.tableData.forEach(dataRow=> rowData.push({
      cells:[ dataRow['namespace'],
      //dataRow['node'],
      dataRow['periodStart'],
      dataRow['periodEnd'],
      //dataRow['pod'],
      //dataRow['podUsageCpuCoreSeconds'],
      ]
    }))

    this.state = {
      columns: [
      myprops.columnTitle['namespace'],
      //myprops.columnTitle['node'],
      myprops.columnTitle['periodStart'],
      myprops.columnTitle['periodEnd'],
      //myprops.columnTitle['pod'],
     // myprops.columnTitle['podUsageCpuCoreSeconds'],
      ],
      rows: rowData,
      canSelectAll: true
    };
    console.log(myprops.tableData)
    this.onSelect = this.onSelect.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
  }

  componentDidMount() {
    console.log(this.props.tableData)
  }

  onSelect(event, isSelected, rowId) {
    let rows;
    if (rowId === -1) {
      rows = this.state["rows"].map(oneRow => {
        oneRow.selected = isSelected;
        return oneRow;
      });
    } else {
      rows = [...this.state["rows"]];
      rows[rowId].selected = isSelected;
    }
    this.setState({
      rows
    });
  }

  toggleSelect(checked) {
    this.setState({
      canSelectAll: checked
    });
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <div>
      <Table aria-label="Selectable Table" onSelect={this.onSelect} cells={columns} rows={rows} canSelectAll={this.state.canSelectAll}>
        <TableHeader />
        <TableBody />
      </Table>
      <Checkbox
        label="canSelectAll"
        isChecked={this.state.canSelectAll}
        onChange={this.toggleSelect}
        aria-label="toggle select all checkbox"
        id="toggle-select-all"
        name="toggle-select-all"
      />
      </div>
    );
  }
}


// const rootElement = document.getElementById("root");
// ReactDOM.render(<SelectableTable />, rootElement);

export { SelectableTable };