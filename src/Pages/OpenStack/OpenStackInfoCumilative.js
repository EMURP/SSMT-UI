import React, { Component } from "react";
import PropTypes from "prop-types";
import OpenStackInfoCumilativeData from "./OpenStackInfoCumilativeData";

class OpenStackInfoCumilative extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      labelData: {
        "Total Pods": 8,
        "Total Nodes": 9,
        "Total Projects": 10,
      },
    };
    this.labelFields = ["Total Pods", "Total Nodes", "Total Projects"];
  }
  render() {
    return (
      <div>
        {this.labelFields.map((value) => (
          <OpenStackInfoCumilativeData
            labelName={value}
            labelValue={this.state.labelData[value]}
          />
        ))}
      </div>
    );
  }
}

OpenStackInfoCumilative.propTypes = {
};

export default OpenStackInfoCumilative;
