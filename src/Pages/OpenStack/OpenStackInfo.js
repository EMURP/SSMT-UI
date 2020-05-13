import React, { Component } from "react";
import PropTypes from "prop-types";
import OpenStackInfoButton from "./OpenStackInfoButton";
import OpenStackInfoCumilative from "./OpenStackInfoCumilative";

class OpenStackInfo extends Component {
  
  render() {
    return <div>
      <OpenStackInfoButton/>
      <OpenStackInfoCumilative/>
    </div>;
  }
}

OpenStackInfo.propTypes = {
  displayMessage: PropTypes.string.isRequired,
};

export default OpenStackInfo;
