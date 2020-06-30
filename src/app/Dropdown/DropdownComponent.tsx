import React from 'react';

type myProps = {
  setHrs: Function;
  Hrs: number;
}

class DropdownComponent extends React.Component<myProps> {

  // create array in format [start, start + 1, start + 2, ..., end]
  createRange(start: number, end: number) {
    return Array.from(new Array(end - start + 1), (_, i) => i + start)
  }

  onSelectChange = (event: React.FormEvent<HTMLSelectElement>) => {
    this.props.setHrs(event.currentTarget.value);
  }

  createDropDowns(key: string, nums: Array<number>, onChange: Function, def: number) {
    return (
      <React.Fragment>
        <label>Select Time</label>

        <select key={key} onChange={e => onChange(e)} value={def} aria-label="Hrs">
          {nums.map(num => (
            <option key={key + num} value={num}>{num}</option>
          ))}
        </select>
      </React.Fragment>
    )
  }

  render() {
    const hrs: Array<number> = this.createRange(0, 23);

    return (
      <div>
        {this.createDropDowns("Hrs", hrs, this.onSelectChange, this.props.Hrs)}
      </div>
    );
  }
}

export { DropdownComponent }
