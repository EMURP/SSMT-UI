import React from 'react';
import { Grid, GridItem, Form, ActionGroup } from '@patternfly/react-core';
import axios from 'axios';
import { SimpleInputGroups } from '@app/DateComponent/DateComponent';
import { DropdownComponent } from '../Dropdown/DropdownComponent';
import { Button } from '@patternfly/react-core';

import SearchToolBar from '@app/SearchToolbar/SearchToolBar';

type myProps = {};
type myState = {
  startHrs: number;
  endHrs: number;
  startDate: Date;
  endDate: Date;
  conditionalRender: number;
  changingDate: boolean;
  api: string;
  clusterData: Array<dataObject> | null;
  err: string | null;
  isLoaded: boolean;
};
export type dataObject = {
  namespace: string;
  activationTime: number;
};

const convertDateToUTC = (date: Date) => {
  return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), 0, 0, 0);
};

class DemoProjectFilterForm extends React.Component<myProps, myState> {
  constructor(myProps) {
    super(myProps);

    const startDate = new Date();
    startDate.setHours(new Date().getHours() - 1);
    startDate.setMinutes(0);
    startDate.setSeconds(0);

    const endDate = new Date();
    endDate.setHours(new Date().getHours());
    endDate.setMinutes(0);
    endDate.setSeconds(0);

    this.state = {
      startHrs: (new Date().getHours() - 1 + 24) % 24, // javascript Modulo function is buggy
      endHrs: new Date().getHours() % 24,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      conditionalRender: 0,
      changingDate: true,

      api: 'https://bce15001-2baf-4479-8f5b-2a6a09ee7744.mock.pstmn.io/project_list_with_activation_time',

      clusterData: null,
      err: null,
      isLoaded: false
    };
    this.callAPI(false);
  }

  shouldComponentUpdate(nextProps, nextState) {
    //console.log(nextState);
    return JSON.stringify(this.state) !== JSON.stringify(nextState);
  }

  callAPI(onSubmit) {
    const startDate = new Date(convertDateToUTC(this.state.startDate)).toISOString().split('.')[0] + 'Z';
    const endDate = new Date(convertDateToUTC(this.state.endDate)).toISOString().split('.')[0] + 'Z';

    let apiUrl = this.state.api;
    if (onSubmit) {
      apiUrl = apiUrl + '/' + startDate + '/' + endDate;
    }
    
    axios
      .get(apiUrl)
      .then(res => {
        const tableData: Array<dataObject> = [];
        res.data.forEach(clusterInfo => {
          tableData.push({
            namespace: clusterInfo['namespace'],
            activationTime: clusterInfo['activation_time']
          });
        });
        this.setState({ ...this.state, isLoaded: true, clusterData: tableData });
      })
      .catch(err => {
        this.setState({ ...this.state, isLoaded: false, err: err });
      });
  }

  changeToggle = () => {
    this.callAPI(true);
    // const conditionalRender: number = this.state.conditionalRender;
    // this.setState({
    //   ...this.state,
    //   changingDate: false,
    //   conditionalRender: conditionalRender + 1
    // });
  };

  setStartHrs = (hrs: number) => {
    const date = new Date(this.state.startDate);
    date.setHours(hrs);
    this.setState({
      ...this.state,
      changingDate: true,
      startHrs: hrs % 24,
      startDate: new Date(date)
    });
  };

  setEndHrs = (hrs: number) => {
    const date = new Date(this.state.endDate);
    date.setHours(hrs);
    this.setState({
      ...this.state,
      changingDate: true,
      endHrs: hrs % 24,
      endDate: new Date(date)
    });
  };

  setStartDate = (date: Date) => {
    date = new Date(date);
    date.setHours(this.state.startHrs);
    date.setDate(date.getDate() + 1);
    this.setState({ ...this.state, changingDate: true, startDate: new Date(date) });
  };

  setEndDate = (date: Date) => {
    date = new Date(date);
    date.setHours(this.state.endHrs);
    date.setDate(date.getDate() + 1);
    this.setState({ ...this.state, changingDate: true, endDate: new Date(date) });
  };

  renderTable = () => {
    const columnTitle = {
      namespace: 'Namespace',
      activationTime: 'Project Active period'
    };

    return (
      <div>
        {this.state.clusterData !== null && (
          <SearchToolBar  data={this.state.clusterData} columnTitle={columnTitle}/>
        )}
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Form>
          <Grid>
            <GridItem span={2}>
              <SimpleInputGroups changeDate={this.setStartDate} dateType="StartDate" key="StartDate" />
              {/* {convertDateToUTC(this.state.startDate).toISOString()} */}
            </GridItem>
            <GridItem span={2}>
              <SimpleInputGroups changeDate={this.setEndDate} dateType="EndDate" key="EndDate" />



              {/* {convertDateToUTC(this.state.endDate).toISOString()} */}
            </GridItem>
          </Grid>
          <Grid>
            <GridItem span={2}>
              <DropdownComponent key={'startHrs'} setHrs={this.setStartHrs} Hrs={this.state.startHrs} />
            </GridItem>
            <GridItem span={2}>
              <DropdownComponent key={'endHrs'} setHrs={this.setEndHrs} Hrs={this.state.endHrs} />
            </GridItem>
          </Grid>
          <Grid>
            <ActionGroup>
              <GridItem span={1}>
                <Button onClick={() => this.changeToggle()}>Search</Button>
              </GridItem>
            </ActionGroup>
          </Grid>
          <Grid>
            <GridItem span={4} rowSpan={8}>
              {/* <ProjectListTable
              changingDate={this.state.changingDate}
              renderCount={this.state.conditionalRender}
              startDate={new Date(convertDateToUTC(this.state.startDate))}
              endDate={new Date(convertDateToUTC(this.state.endDate))}
            /> */}
              {this.state.isLoaded && this.renderTable()}
              {!this.state.isLoaded && this.state.err !== null && <div>{JSON.stringify(this.state.err["response"]["data"]["error"]["message"])}</div>}
            </GridItem>
          </Grid>
        </Form>
      </React.Fragment>
    );
  }
}
export { DemoProjectFilterForm };
