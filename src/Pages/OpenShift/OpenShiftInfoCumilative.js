import React, { Component } from "react";

import OpenShiftInfoCumilativeData from "./OpenShiftInfoCumilativeData";

class OpenShiftInfoCumilative extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      labelData: {
        "Total Pods": 5,
        "Total Nodes": 6,
        "Total Projects": 7,
      },
    };
    this.labelFields = ["Total Pods", "Total Nodes", "Total Projects"];
  }
  render() {
    console.log(this.labelFields);
    return (
      <div>
        {this.labelFields.map((value) => (
          <OpenShiftInfoCumilativeData
            key={value}
            labelName={value}
            labelValue={this.state.labelData[value]}
          />
        ))}
      </div>
    );
  }
}

OpenShiftInfoCumilative.propTypes = {};

export default OpenShiftInfoCumilative;
