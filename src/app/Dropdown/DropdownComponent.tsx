import React, { EventHandler } from 'react';
import {
  Button,
  InputGroup,
  TextInput,
  Dropdown,
  DropdownToggle,
  DropdownItem
} from '@patternfly/react-core';



type myProps = {
  setHrs: Function;
  Hrs: number;
}

type myState = {
}


class DropdownComponent extends React.Component<myProps,myState>{
  constructor(myProps) {
    super(myProps);
    this.state = {
    }
  }

  createRange(start: number ,end: number ){
    const nums: Array<number>=[]
    while(start <= end){
      nums.push(start);
      start+=1;
    }
    return nums
  }

  Hrs=(event: React.FormEvent<HTMLSelectElement>)=>{
    this.props.setHrs(event.currentTarget.value)
  }

  createDropDowns(key: string, nums: Array<number>, onChange: Function, def: number ) {
    return(
      <select key={key} onChange={e=>onChange(e)} value={def} aria-label="Hrs">
        {key} 
        {nums.map((num)=>{ 
          return(<option key={key+num} value={num}>{num}</option>)
        } )}
      </select>
    )
    
  }

  render() {
    const hrs: Array<number> = this.createRange(0,23);
    
    return (
      <div>
        {this.createDropDowns("Hrs",hrs,this.Hrs,this.props.Hrs)}
      </div>
    );
  }
}

export{ DropdownComponent}
