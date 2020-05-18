import React, { Component } from "react";
import OpenShiftInfo from "./Pages/OpenShift/OpenShiftInfo";
import OpenStackInfo from "./Pages/OpenStack/OpenStackInfo";
// import { Route, Switch } from "react-router-dom";

const horizontal = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  spacing: "50%",
  align : "center"
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <center>
            <h1>OPS Dashboard </h1>
          </center>
        </header>

     
        <div style={horizontal}>
         <OpenStackInfo displayMessage="APP -> OpenStack" />
         <OpenShiftInfo displayMessage="APP -> OpenShift" />
        </div>
       

      </div>
    );
  }
  

}

export default App;
// {
//   return (
//     <Switch>
//       <Route exact path="/" component={home} />
//       <Route path="./Openstackmain" component={Openstackmain} />
//       <Route path="./Openshiftmain" component={Openshiftmain} />
//     </Switch>
//   );
// }
