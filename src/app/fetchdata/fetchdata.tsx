import React from "react";
// import ReactDOM from "react-dom";
import axios from "axios";
import "@patternfly/react-core/dist/styles/base.css";
// import {
//     Table,
//     TableHeader,
//     TableBody,
//     TableVariant
// } from '@patternfly/react-table';
import '../app.css';
import { PageSection } from '@patternfly/react-core';
import { any } from 'prop-types';

let cluster_data = [] as any;

const columns = [

    {
        title: "namespace"

    }, {
        title: 'node'

    }, {
        title: 'period_end'

    },
    {
        title: 'period_start'

    },
    {
        title: 'pod'

    },
    {
        title: 'pod_usage_cpu_core_seconds'

    },

]

let rows = [] as any;
const Fetchdata: React.FunctionComponent<{}> = () => {
    const url = "https://bc2f9a92-a71f-4ad8-b93b-63ad65e50fa0.mock.pstmn.io/cluster_data";

    // store the api data in people array and searchResults
    React.useEffect(() => {
        axios.get(url).then(res => {
            cluster_data = res.data;

            // rows = cluster_data.map(item => {

            //     const cell1 = item.namespace;
            //     //console.log(cell1);
            //     const cell2 = item.node;
            //     const cell3 = item.period_end;
            //     const cell4 = item.period_start;
            //     const cell5 = item.pod;
            //     const cell6 = item.pod_usage_cpu_core_seconds;
            //     const arr = [] as any;
            //     arr.push(cell1, cell2, cell3, cell4, cell5, cell6);
            //     //console.log(arr);

            //     return (

            //         arr
            //     )

            // }

            // )
            setSearchResults(cluster_data);
            //console.log(data_row);
            //rows.push(data_row);
            //console.log(rows);

            //rows = res.data;
        });
    }, []);
    //console.log(people);
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);

    // habdlechange function to be called when we enter any string in the searchbox, stores the input in varialbe searchTerm
    const handleChange = e => {
        setSearchTerm(e.target.value);
    };

    // apply filter on cluster_data and store results in searchResults
    React.useEffect(() => {
        const results = cluster_data.filter(
            cluster_item =>

                cluster_item.namespace.toLowerCase().includes(searchTerm) ||
                cluster_item.node.toLowerCase().includes(searchTerm) ||
                //person.period__end.toDateString().toLowerCase().includes(searchTerm) ||
                // person.period__start.toLowerCase().includes(searchTerm) ||
                cluster_item.pod.toLowerCase().includes(searchTerm)
            //person.pod_usage_cpu_core_seconds.toLowerCase().includes(searchTerm)
        );
        //rows = results;
        setSearchResults(results);
        console.log(results);
        //rows = results;
    }, [searchTerm]);

    // render Table UI
    return (
        <PageSection>

            <div className="App">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                />

                <table id="cluster_info">

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

                        {searchResults.map((cluster_info: { namespace: React.ReactNode; node: React.ReactNode; period_end: React.ReactNode; period_start: React.ReactNode; pod: React.ReactNode; pod_usage_cpu_core_seconds: React.ReactNode; }) => {
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
                </table>

                {/* <Table aria-label="Compact Table" variant={TableVariant.compact} cells={columns} rows={rows}>


                    <TableHeader />
                    <TableBody>


                    </TableBody>


                </Table> */}
            </div>

        </PageSection>

    );
}

export { Fetchdata };
