import React from "react";
import { Link } from 'react-router-dom';

type myProps = {
    columnTitle: object;
    reportsData: Array<object>;
};

type myState = {
};

class ReportsList extends React.Component<myProps, myState> {
    constructor(myProps) {
        super(myProps);
        this.state = {
        };
    }


    render() {
        return (
            <div>
                <div>
                    {this.props.columnTitle}
                </div>
                <ul>
                    {this.props.reportsData}
                </ul>
            </div>
        )
    }
}

export default ReportsList;