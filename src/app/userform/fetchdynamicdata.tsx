import React, { Component } from 'react';
import axios from "axios";
import '../app.css';




const Fetchdynamicdata: React.FunctionComponent<{}> = () => {

  const [searchTerm_namespace, setSearchterm_namespace] = React.useState()
  //const [searchTerm_periodStart, setSearchterm_periodStart] = React.useState("")
  const [data, setData] = React.useState([]);

  const setNamespc_param = (e) => {
    console.log(e.target.value);
    setSearchterm_namespace(e.target.value);

    axios.get('https://3903aa74-2b7e-4ea9-85f1-04f11f67a2ad.mock.pstmn.io/list_project', {
      params: {
        namespace: searchTerm_namespace
        // period_start: searchTerm_periodStart
      }
    }).then(res => {
      setData(res.data)
      console.log(res.data)

    })
    //setSearchterm_periodStart(e.target.value);
    //e.preventDefault();
    //const namespace = e.target.value;
    // if (searchTerm) {
    //   console.log(searchTerm);
    //   console.log("https://3903aa74-2b7e-4ea9-85f1-04f11f67a2ad.mock.pstmn.io/list_projects");


    // } else return;
  }
  // const setdate_param = (e) => {
  //   console.log(e.target.value);
  //   //setSearchterm_namespace(e.target.value);
  //   setSearchterm_periodStart(e.target.value);
  //   //e.preventDefault();
  //   //const namespace = e.target.value;
  //   // if (searchTerm) {
  //   //   console.log(searchTerm);
  //   //   console.log("https://3903aa74-2b7e-4ea9-85f1-04f11f67a2ad.mock.pstmn.io/list_projects");

  //   //   axios.get('https://site.com/', {
  //   //     params: {
  //   //       namespace: searchTerm
  //   //       period_start:
  //   //     }
  //   //   })
  //   //     .then((res) => {
  //   //       console.log(res.data);
  //   //       setData(res.data);
  //   //     })
  //   // } else return;
  // }

  // console.log(searchTerm_namespace);
  // console.log(searchTerm_periodStart);

  // const getProjectList = () => {
  //   // console.log(e.target.value);
  //   // setSearchterm_namespace(e.target.value);
  //   // setSearchterm_periodStart(e.target.value);
  //   //e.preventDefault();
  //   //const namespace = e.target.value;

   






  // }


  {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HTTP Calls in React</h1>
        </header>
        {/* <UserForm getNamespace={this.getNamespace} /> */}
        {/* <form onSubmit={getProjectList}> */}

          <input
            type="text"
            placeholder="Search"
            value={searchTerm_namespace}
            onBlur={setNamespc_param}
          />
          {/* <input
            type="text"
            placeholder="Search"
            value={searchTerm_periodStart}
            onChange={setdate_param}
          /> */}
          {/* <button type="submit">Submit</button> */}

        {/* </form> */}


        {(searchTerm_namespace) ? <table id="cluster_info">

          <thead>
            <tr>
              <th>Namespace</th>
              <th>Node</th>
              <th>Period_End</th>
              <th>Period_Start</th>
              <th>Pod</th>
              <th>Pod_Usage_Cpu_Core_seconds</th>
            </tr>
          </thead>
          <tbody>

            {data.map((cluster_info: { namespace: React.ReactNode; node: React.ReactNode; period_end: React.ReactNode; period_start: React.ReactNode; pod: React.ReactNode; pod_usage_cpu_core_seconds: React.ReactNode; }) => {
              return (
                <React.Fragment>
                  <tr>
                    <td>{cluster_info.namespace}</td>
                    <td>{cluster_info.node}</td>
                    <td>{cluster_info.period_end}</td>
                    <td>{cluster_info.period_start}</td>
                    <td>{cluster_info.pod}</td>
                    <td>{cluster_info.pod_usage_cpu_core_seconds}</td>
                  </tr>
                </React.Fragment>

              )


            })}
          </tbody>
        </table> : <p>Incorrect search term</p>}
      </div>
    );
  }
};
export { Fetchdynamicdata };
