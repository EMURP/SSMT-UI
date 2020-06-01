import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
//import { SelectableTable } from '@app/myTable/SelectableTable';
import { DashboardTable } from './DashboardTable';



type myProps = {
  startDate: Date;
  endDate: Date;
};
type myState = {
    isLoaded: boolean;
    clusterData: Array<dataObject>;
};

type dataObject = {

    namespace: string;
    node: string;
    pod: string;
    podUsageCpuCoreSeconds: string;
    periodEnd: Date;
    periodStart: Date;


}


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

class GetDataFromAPI extends React.Component<myProps,myState> {
  constructor(myProps) {
    super(myProps);

       this.state={
         isLoaded: false,
         clusterData: []
       };
  }

  componentDidMount(){
    const apiUrl =
    "https://3903aa74-2b7e-4ea9-85f1-04f11f67a2ad.mock.pstmn.io/list_project/2020-05-15/2020-05-28";

    //console.log(this.myProps.startDate);

   axios.get(apiUrl).then(res => {
    console.log(this.myProps.startDate);
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

     this.setState({...this.state, isLoaded:true, clusterData: tableData})
  }).catch( err => {
    this.setState( {...this.state, isLoaded:false},()=>console.log(err));
  })
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
          <DashboardTable
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
    return(this.state.isLoaded &&  this.renderTable());
  }
}

export { GetDataFromAPI }