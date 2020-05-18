import React, { Component } from "react";
import PropTypes from "prop-types";
import OpenShiftInfoButton from "./OpenShiftInfoButton";
import OpenShiftInfoCumilative from "./OpenShiftInfoCumilative";

class OpenShiftInfo extends Component {
  render() {
    return (
      <div>
        <OpenShiftInfoButton/>
        
        <OpenShiftInfoCumilative/>
        
      </div>
    );
  }
}

OpenShiftInfo.propTypes = {
  displayMessage: PropTypes.string.isRequired,
};

export default OpenShiftInfo;
