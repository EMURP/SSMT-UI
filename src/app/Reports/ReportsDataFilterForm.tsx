import React from 'react';
import { Grid, GridItem, Form, ActionGroup } from '@patternfly/react-core';
import { SimpleInputGroups } from '@app/DateComponent/DateComponent';
import { Button } from '@patternfly/react-core';
import ReportsList from './ReportsList';

type myProps = {};
type myState = {
    startDate: Date;
    endDate: Date;
    conditionalRender: number;
    changingDate: boolean;
    api: string;
    reportsData: Array<object> | null;
    err: string | null;
    isLoaded: boolean;
};
// export type dataObject = {
//     reportName: Element;
//     reportDate: Date;
// };

class ReportsDataFilterForm extends React.Component<myProps, myState> {
    constructor(myProps) {
        super(myProps);

        const startDate = new Date();
        const endDate = new Date();
        const sampleReportsData = [
            {apiVersion: 'metering.openshift.io/v1',
             kind: 'Report',
             metadata: {name: 'pod-cpu-request-hourly'},
             spec: {query: 'pod-cpu-request',
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
            {apiVersion: 'metering.openshift.io/v2',
             kind: 'Report',
             metadata: {name: 'pod-cpu-request-hourly'},
             spec: {query: 'pod-cpu-request',
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
            api: 'https://',
            reportsData: sampleReportsData,//null,
            err: null,
            isLoaded: false
        };

        this.callAPI(false);
    }

    callAPI(onSubmit) {

    }

    changeToggle() {

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

    renderReportsList() {
        const columnTitle = {
            reportName: 'Report Name',
            reportDate: 'Date'
        };
        //console.log(this.state.reportsData);
        return (
            <div>
                {this.state.reportsData !== null && (
                    <ReportsList
                        columnTitle={columnTitle}
                        reportsData={this.state.reportsData}
                    />
                )}
            </div>
        );
    }

    /*
    Reports Filter Form
    -Filter by date range 
    --Start Date 
    --End Date
    -list daily reports 
    */
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
                            {this.state.isLoaded && this.renderReportsList()}
                            {!this.state.isLoaded && this.state.err !== null && <div>{this.state.err.toString()}</div>}
                        </GridItem>
                    </Grid>
                </Form>
            </React.Fragment>
        );
    }
}

export { ReportsDataFilterForm };