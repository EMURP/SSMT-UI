import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const Fetchdata: React.FunctionComponent<{}> = () => {
  const url = 'https://bc2f9a92-a71f-4ad8-b93b-63ad65e50fa0.mock.pstmn.io/cluster_data'

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(url).then(json => setData(json.data))
  }, [])

  const renderTable = () => {
    return data.map(cluster_info => {
      return (
        <tr>
          <td>{cluster_info.namespace}</td>
          <td>{cluster_info.node}</td>
          <td>{cluster_info.period__end}</td>
          <td>{cluster_info.period_start}</td>
          <td>{cluster_info.pod}</td>
          <td>{cluster_info.pod_usage_cpu_core_seconds}</td>
        </tr>
      )
    })
  }

  return (
    <div>
      <h1 id="title">Cluster Info Table</h1>
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
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  )
}
export { Fetchdata };