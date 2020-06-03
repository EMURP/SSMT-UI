
import React from 'react';
import axios from 'axios';
// import { SelectableTable } from '@app/myTable/SelectableTable';/
import { DashboardTable } from '@app/myTable/DashboardTable/DashboardTable';


type myProps = {
  startDate: Date;
  endDate: Date;
  searching: boolean;
  renderCount: number;
};
type myState = {
  isLoaded: boolean;
  clusterData: Array<dataObject>;
  api: string;
  err: string;
};

type dataObject = {
  namespace: string;
  node: string;
  pod: string;
  podUsageCpuCoreSeconds: string;
  periodEnd: Date;
  periodStart: Date;
};

// To convert the date from the string format TODO:Fix
const parseISOString = (s: string) => {
  const b: Array<string> = s.split(/\D+/);
  return new Date(
    Date.UTC(
      Number.parseInt(b[0]),
      Number.parseInt(b[1]),
      Number.parseInt(b[2]),
      Number.parseInt(b[3]),
      Number.parseInt(b[4]),
      Number.parseInt(b[5])
    )
  );
};

class Fetchdata extends React.Component<myProps, myState> {
  constructor(myProps) {
    super(myProps);

    this.state = {
      isLoaded: false,
      clusterData: [],
      api: "https://c507295a-b340-4a31-a144-749e6fb4c08a.mock.pstmn.io/list_projects/",
      err: "",
    };

    this.callAPI(this.props);
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    this.callAPI(nextProps);
  }

  callAPI(props) {
    const startDate = props.startDate.toISOString().split('.')[0]+"Z";
    const endDate = props.endDate.toISOString().split('.')[0]+"Z";



    let apiUrl=this.state.api;
    if(props.searching){
      apiUrl = apiUrl+ startDate + '/' + endDate;
    }
    
    axios
      .get(apiUrl)
      .then(res => {

        const tableData: Array<dataObject> = [];
        res.data.forEach(clusterInfo => {
          tableData.push({
            namespace: clusterInfo['namespace'],
            node: clusterInfo['node'],
            periodEnd: parseISOString(clusterInfo['period_end']),
            periodStart: parseISOString(clusterInfo['period_start']),
            pod: clusterInfo['pod'],
            podUsageCpuCoreSeconds: clusterInfo['pod_usage_cpu_core_seconds']
          });
        });
        this.setState({ ...this.state, isLoaded: true, clusterData: tableData });
      })
      .catch(err => {
        this.setState({ ...this.state, isLoaded: false, err:err });
      });
  }

  renderTable = () => {
    const columnTitle = {
      namespace: 'Namespace',
      node: 'Node',
      periodEnd: 'Period End',
      periodStart: 'Period Start',
      pod: 'Pod',
      podUsageCpuCoreSeconds: 'pod_usage_cpu_core_seconds'
    };

    return (
      <div>
        {this.state.clusterData.length !== 0 && (
          <DashboardTable key={"DataTable"}
            startDate={this.props.startDate}
            endDate={this.props.endDate}
            columnTitle={columnTitle}
            tableData={this.state.clusterData}
          />
        )}
      </div>
    );
  };

  render() {
    return(
      <div>
      {this.state.isLoaded && this.renderTable()}
      {!this.state.isLoaded && <div>{this.state.err.toString()}</div>}
      </div>
      );
  }
}

export { Fetchdata };
