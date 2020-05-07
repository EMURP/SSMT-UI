import React, { Component } from "react";
import PropTypes from "prop-types";

class OpenStackInfoCumilativeData extends Component {
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

OpenStackInfoCumilativeData.propTypes = {
  labelName: PropTypes.string.isRequired,
  labelValue: PropTypes.number.isRequired

};

export default OpenStackInfoCumilativeData
;
