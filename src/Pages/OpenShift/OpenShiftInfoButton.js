import React, { Component } from "react";
import PropTypes from "prop-types";

class OpenShiftInfoButton extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div>
        <button>Open Shift</button>
      </div>
    );
  }
}

OpenShiftInfoButton.propTypes = {};

export default OpenShiftInfoButton;
