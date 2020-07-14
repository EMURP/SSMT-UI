import React from 'react';
import { Grid, GridItem, Form, ActionGroup } from '@patternfly/react-core';
import axios from 'axios';
import { SimpleInputGroups } from '@app/DateComponent/DateComponent';
import { Button, Checkbox} from '@patternfly/react-core';
import ReportsList from './ReportsList';
import sampleData from './sampleReportData.json';
import CsvDownload from 'react-json-to-csv';
import ReportTypeDropdown from './ReportTypeDropdown';
import ReportFrequencyDropdown from './ReportFrequencyDropdown';

type myProps = {};
type myState = {
    startDate: Date;
    endDate: Date;
    conditionalRender: number;
    changingDate: boolean;
    api: string;
    clusterData: Array<dataObject> | null;
    err: string | null;
    isLoaded: boolean;
    generateLineGraph: boolean;
};
export type dataObject = {
    namespace: Element;
    //activationTime: number;
    //node: Element;
    podUsageCpuCoreSeconds: number;
    network: Element;
    memory: Element;
};

const convertDateToUTC = (date: Date) => {
    return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), 0, 0, 0);
};

class ReportsDataFilterForm extends React.Component<myProps, myState> {
    constructor(myProps) {
        super(myProps);

        const startDate = new Date();
        const endDate = new Date();

        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            conditionalRender: 0,
            changingDate: true,
            // TODO: update api from backend once available
            api: 'https://c507295a-b340-4a31-a144-749e6fb4c08a.mock.pstmn.io/project_list_with_activation_time',
            clusterData: null,
            err: null,
            isLoaded: false,
            generateLineGraph: false,
        };

        this.callAPI(false);
    }


    shouldComponentUpdate(nextProps, nextState) {
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
                        //activationTime: clusterInfo['activation_time'],
                        //node: clusterInfo['node'],
                        podUsageCpuCoreSeconds: clusterInfo['pod_usage_cpu_core_seconds'],
                        network: clusterInfo['network'], 
                        memory: clusterInfo['memory']

                    });
                });
                this.setState({ ...this.state, isLoaded: true, clusterData: tableData });
            })
            .catch(err => {
                this.setState({ ...this.state, isLoaded: false, err: err });
            });
    }

    changeToggle() {
        this.callAPI(true);
    }


    setStartDate = (date: Date) => {
        date = new Date(date);
        //date.setHours(this.state.startHrs);
        date.setDate(date.getDate() + 1);
        this.setState({ ...this.state, changingDate: true, startDate: new Date(date) });
    };

    setEndDate = (date: Date) => {
        date = new Date(date);
        //date.setHours(this.state.endHrs);
        date.setDate(date.getDate() + 1);
        this.setState({ ...this.state, changingDate: true, endDate: new Date(date) });
    };

    // change handler for line graph option checkbox
    // if true, report results should include a line graph.
    toggleLineGraph(checked) {
        this.setState({
            generateLineGraph: checked
        }); 
    };

    renderTable = () => {
        const columnTitle = {
            namespace: 'Report Name',
            //activationTime: 'Report Date',
            //node: 'Node',
            podUsageCpuCoreSeconds: 'Pod CPU Usage in Seconds',
            network: 'Network Usage in Megabits per Second',
            memory: 'Memory Usage in Gigabytes'
        };

        return (
            <div>
                {/* {this.state.clusterData !== null && ( */}
                    <ReportsList
                        key={'ReportsList'}
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        columnTitle={columnTitle}
                        tableData={sampleData}
                    />
                {/* )} */}
            </div>
        );
    };

    render() {
        return (
            <React.Fragment>
                <Form>
                    <div>Select a date range to view available Daily, Weekly, and Monthly reports.</div>
                    <Grid>
                        <GridItem span={2}>
                            <SimpleInputGroups changeDate={this.setStartDate} dateType="StartDate" key="StartDate" />
                        </GridItem>
                        <GridItem span={2}>
                            <SimpleInputGroups changeDate={this.setEndDate} dateType="EndDate" key="EndDate" />
                        </GridItem>
                    </Grid>
                    <Grid>
                        <GridItem span={2}>
                            <CsvDownload data={sampleData}>Download as CSV</CsvDownload>
                        </GridItem>
                        {/* <GridItem span={2}>
                            <Checkbox label="Generate Line Graph" onChange={this.toggleLineGraph} aria-label="toggle line graph" id="toggle-line-graph"/>
                        </GridItem> */}
                    </Grid>
                    <Grid>
                        <GridItem span={2}>
                            <ReportTypeDropdown/>
                        </GridItem>
                    </Grid>
                    <Grid>
                        <GridItem span={2}>
                            <ReportFrequencyDropdown/>
                        </GridItem>
                    </Grid>
                    <Grid>
                        <ActionGroup>
                            <GridItem span={1}>
                                <Button onClick={() => this.changeToggle()}>Submit</Button>
                            </GridItem>
                        </ActionGroup>
                    </Grid>
                    <Grid>
                        <GridItem span={4} rowSpan={8}>
                            {this.state.isLoaded && this.renderTable()}
                            {!this.state.isLoaded && this.state.err !== null && <div>{this.state.err.toString()}</div>}
                        </GridItem>
                    </Grid>
                </Form>
            </React.Fragment>
        );
    }
}

export { ReportsDataFilterForm };
