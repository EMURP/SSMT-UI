import React from 'react';

//import  { useState } from 'react';

import { Card, CardBody } from '@patternfly/react-core';

import { SimpleInputGroups } from '@app/DateComponent/DateComponent';

import { DropdownComponent } from '../Dropdown/DropdownComponent';

//import { SimpleTable } from '../myTable/SimpleTable';

import { Button } from '@patternfly/react-core';

//import {InputGroup, TextInput, Dropdown, DropdownToggle, DropdownItem} from '@patternfly/react-core';

import { Fetchdata } from '@app/fetchdata/Fetchdatatemp';

import { Grid, GridItem } from '@patternfly/react-core';


type myProps = {};
type myState = {
    startHrs: number;
    endHrs: number;
    startDate: Date;
    endDate: Date;
    submitToggle: boolean;
    conditionalRender: number;
};


// const horizontalFlex = {
//     display: 'flex',
//     flexDirection: 'row'
//   } as React.CSSProperties;
  
//   const padding = {
//     marginRight: '30px'
//   } as React.CSSProperties;
  

const convertDateToUTC = (date: Date, hrs: number )=> { 
    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
     hrs, date.getUTCMinutes(), date.getUTCSeconds()); }
 
class GridProjectDataFilterForm extends  React.Component<myProps, myState> {

    constructor(myProps) {

      super(myProps);

      this.state={
          startHrs: 0,
          endHrs: 0,
          startDate: convertDateToUTC(new Date(Date.UTC(0, 0, 0, 0, 0, 0)),0),
          endDate: convertDateToUTC(new Date(),0),
          submitToggle: false,
          conditionalRender:0,
      }
    }

    // shouldComponentUpdate(nextProps: myProps, nextState: myState){
    //   return this.state.conditionalRender!==nextState.conditionalRender;
    // }

    changeToggle=() =>{
      const conditionalRender: number= this.state.conditionalRender;
      if(this.state.startDate !== convertDateToUTC(new Date(Date.UTC(0, 0, 0, 0, 0, 0)),0)){
        this.setState({...this.state, submitToggle:true, conditionalRender:conditionalRender+1 })
      }
    }

    setStartHrs = (hrs: number) => {
        this.setState({...this.state, startHrs:hrs,startDate:convertDateToUTC(new Date(this.state.startDate),hrs)});
    }

    setEndHrs = (hrs: number) => {
      this.setState({...this.state, endHrs:hrs,endDate:convertDateToUTC(new Date(this.state.endDate),hrs)})
    }

    setStartDate = (date: Date) => {
      this.setState({...this.state, startDate:convertDateToUTC(new Date(date),this.state.startHrs)})
  }

  setEndDate = (date: Date) => {
    this.setState({...this.state, endDate:convertDateToUTC(new Date(date),this.state.startHrs)})
  }


    render() {

        return(

          <Grid>

              <GridItem span={10}>


                <h3> Select Date and Time </h3>

              </GridItem>

           

               <GridItem span={5} rowSpan={2}>

        
                    <Card>
                        <CardBody> Start Date: </CardBody>
                        <SimpleInputGroups changeDate={this.setStartDate} dateType="startDate" key="startDate"/>
                        {/* {this.state.startDate.toISOString()} */}
                    </Card>

            
        
                    <Card>
                    <CardBody> Start Time: </CardBody>
                    <DropdownComponent key={"startHrs"} setHrs={this.setStartHrs} Hrs={this.state.startHrs} />         
                        {/* {this.state.startHrs}  */}
                    </Card>

                </GridItem>

                <GridItem span={5} rowSpan={2}>

                    <Card>
                        <CardBody> End Date: </CardBody>
                        <SimpleInputGroups changeDate={this.setEndDate} dateType="endDate" key="endDate"/>
                         {/* {this.state.endDate.toISOString()} */}
                    </Card>

            

                    <Card>
                        <CardBody> End Time: </CardBody>
                        <DropdownComponent key={"endHrs"} setHrs={this.setEndHrs} Hrs={this.state.endHrs}/>
                        {/* {this.state.endHrs} */}
                     </Card>

         
               </GridItem>

              {/* <h1> Display Project Data </h1> */}


               <GridItem span={6} rowSpan={2}>
          
                    <Button isBlock onClick={()=>this.changeToggle()} disabled={this.state.startDate !== convertDateToUTC(new Date(Date.UTC(0, 0, 0, 0, 0, 0)),0)}>Search</Button>
         
                </GridItem>
                
                <GridItem span={10} rowSpan={10}> 

                <h2>Data from Fetch Data </h2>

                <Fetchdata renderCount={this.state.conditionalRender} searching={this.state.submitToggle}startDate={this.state.startDate} endDate={this.state.endDate}/>  

                </GridItem>
        
               
        </Grid>

        );

    }


}
export {GridProjectDataFilterForm};

