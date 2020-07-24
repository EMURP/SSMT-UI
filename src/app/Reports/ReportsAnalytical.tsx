import '@patternfly/react-core/dist/styles/base.css';
import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

type myProps = {
  columnTitle: object;
  tableData: object;
  startDate: Date;
  reportFrequency: string;
};
type myState = {
  options: any;
  series: any;
};

class ReportsAnalytical extends React.Component<myProps, myState> {
  constructor(props) {
    super(props);

    this.state = {
      series:  [{
        name: 'CPU Usage',
        type: 'line',
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
      }, {
        name: 'Network Usage',
        type: 'line',
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
      }, {
        name: 'Memory Usage',
        type: 'line',
        data: [20, 29, 37, 36, 44, 45, 50, 58]
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          stacked: false
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [1, 1, 4]
        },
        title: {
          text: 'XYZ - Stock Analysis (2009 - 2016)',
          align: 'left',
          offsetX: 110
        },
        xaxis: {
          categories: this.generateXScale(this.props.startDate, this.props.reportFrequency),
        },
        yaxis: [
          { // CPU Usage 
            seriesName: 'CPU Usage',
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#008FFB'
            },
            labels: {
              style: {
                colors: '#008FFB',
              }
            },
            title: {
              text: "CPU Usage in Seconds",
              style: {
                color: '#008FFB',
              }
            },
            // tooltip: {
            //   enabled: true
            // }
          },
          {
            seriesName: 'Network Usage',
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#00E396'
            },
            labels: {
              style: {
                colors: '#00E396',
              }
            },
            title: {
              text: "Network Usage in Megabits per Second",
              style: {
                color: '#00E396',
              }
            },
          },
          {
            seriesName: 'Memory Usage',
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#FEB019'
            },
            labels: {
              style: {
                colors: '#FEB019',
              },
            },
            title: {
              text: "Memory Usage in Gigabytes",
              style: {
                color: '#FEB019',
              }
            }
          },
        ],
        tooltip: {
          fixed: {
            enabled: true,
            position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60
          },
        },
        legend: {
          horizontalAlign: 'left',
          offsetX: 40
        }
      },
    };
  }

  // returns an array which represents a time scale
  // forthe x axis.
  generateXScale(startDate: Date, frequency: string) {
    const xScale: Array<string> = [];

    switch (frequency) {
      case "monthly":
        for (var i = 0; i < 4; i++) {
          //TODO: generate a scale of 4 or so weeks
        }
        break;
      case "weekly":
        for (var i = 0; i < 7; i++) {
          xScale.push(new Date(startDate.getTime() + i*24*60*60*1000).toDateString());
        }
        break;
      default: //daily as default 
        for (var i = 0; i < 4; i++) {
         //TODO: generate a scale of 24 hours
        }
    }
    return xScale;
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width={1000}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ReportsAnalytical;