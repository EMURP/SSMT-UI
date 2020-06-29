import React from 'react';
import { Grid, GridItem, Form, ActionGroup } from '@patternfly/react-core';
import axios from 'axios';
import { SimpleInputGroups } from '@app/DateComponent/DateComponent';
import { Button } from '@patternfly/react-core';
import ReportsList from './ReportsList';
import { DashboardTable } from '@app/myTable/DashboardTable/DashboardTable';

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
};
export type dataObject = {
    namespace: Element;
    activationTime: number;
};

const convertDateToUTC = (date: Date) => {
    return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), 0, 0, 0);
};

class ReportsDataFilterForm extends React.Component<myProps, myState> {
    constructor(myProps) {
        super(myProps);

        const startDate = new Date();
        const endDate = new Date();
        const sampleReportsData = [
            {
                apiVersion: 'metering.openshift.io/v1',
                kind: 'Report',
                metadata: { name: 'pod-cpu-request-hourly' },
                spec: {
                    query: 'pod-cpu-request',
                    reportingStart: '2019-07-01T00:00:00Z',
                    schedule:
                    {
                        period: 'hourly',
                        hourly:
                        {
                            minute: 0,
                            second: 0
                        }
                    }
                }
            },
            {
                apiVersion: 'metering.openshift.io/v2',
                kind: 'Report',
                metadata: { name: 'pod-cpu-request-hourly' },
                spec: {
                    query: 'pod-cpu-request',
                    reportingStart: '2020-07-01T00:00:00Z',
                    schedule:
                    {
                        period: 'hourly',
                        hourly:
                        {
                            minute: 0,
                            second: 0
                        }
                    }
                }
            }
        ];

        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            conditionalRender: 0,
            changingDate: true,
            api: 'https://0.0.0.0/project_list_with_activation_time',
            clusterData: null,
            err: null,
            isLoaded: false
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
        //console.log(apiUrl);

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

    renderTable = () => {
        const columnTitle = {
            namespace: 'Report Name',
            activationTime: 'Report Date'
        };

        console.log(JSON.stringify(this.state.clusterData));

        return (
            <div>
                {this.state.clusterData !== null && (
                    <ReportsList
                        key={'DataTable'}
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        columnTitle={columnTitle}
                        tableData={this.state.clusterData}
                    />
                )}
            </div>
        );
    };

    render() {
        return (
            <React.Fragment>
                <Form>
                    <div>Select a date range for daily reports.</div>
                    <Grid>
                        <GridItem span={2}>
                            <SimpleInputGroups changeDate={this.setStartDate} dateType="StartDate" key="StartDate" />
                        </GridItem>
                        <GridItem span={2}>
                            <SimpleInputGroups changeDate={this.setEndDate} dateType="EndDate" key="EndDate" />
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
