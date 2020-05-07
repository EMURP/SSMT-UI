import React, { Component } from "react";
import PropTypes from "prop-types";

class OpenStackInfoButton extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div>
        <button>Open Stack </button>
      </div>
    );
  }
}

OpenStackInfoButton.propTypes = {};

export default OpenStackInfoButton;
