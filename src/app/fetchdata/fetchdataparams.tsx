import ReactDOM from 'react-dom';
import "@patternfly/react-core/dist/styles/base.css";
//import './fonts.css';

import React from 'react';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core';

class TypeaheadSelectInput extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
      <SelectOption key={0} value="Alabama" />,
      <SelectOption key={1} value="Florida" />,
      <SelectOption key={2} value="New Jersey" />,
      <SelectOption key={3} value="New Mexico" />,
      <SelectOption key={4} value="New York" />,
      <SelectOption key={5} value="North Carolina" />
    ];
    this.state = {
      isExpanded: false,
      selected: null,
      options: this.options
    };

    this.onToggle = isExpanded => {
      this.setState({
        isExpanded,
        options: this.options
      });
    };

    this.onSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearSelection();
      else {
        this.setState({
          selected: selection,
          isExpanded: false
        });
        console.log('selected:', selection);
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: null,
        isExpanded: false,
        options: this.options
      });
    };

    this.customFilter = e => {
      let input;
      try {
        input = new RegExp(e.target.value, 'i');
      } catch (err) {}
      let typeaheadFilteredChildren =
        e.target.value !== '' ? this.options.filter(child => input.test(child.props.value)) : this.options;
      this.setState({
        options: typeaheadFilteredChildren
      });
    };
  }

  render() {
    const { isExpanded, selected, options } = this.state;
    const titleId = 'typeahead-select-id';
    return (
      <div>
        <span id={titleId} hidden>
          Select a state
        </span>
        <Select
          variant={SelectVariant.typeahead}
          ariaLabelTypeAhead="Select a state"
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          onClear={this.clearSelection}
          onFilter={this.customFilter}
          selections={selected}
          isExpanded={isExpanded}
          ariaLabelledBy={titleId}
          placeholderText="Select a state"
        >
          {options}
        </Select>
      </div>
    );
  }
}


export { TypeaheadSelectInput };