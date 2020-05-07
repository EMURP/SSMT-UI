import React, { Component } from "react";
import PropTypes from "prop-types";

class OpenShiftInfoCumilativeData extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div>
        <label>{ this.props.labelName } </label>
        <label>{ this.props.labelValue } </label>
      </div>
    );
  }
}

OpenShiftInfoCumilativeData.propTypes = {
  labelName: PropTypes.string.isRequired,
  labelValue: PropTypes.number.isRequired

};

export default OpenShiftInfoCumilativeData
;
