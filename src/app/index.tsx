import * as React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppLayout } from '@app/AppLayout/AppLayout';
import { AppRoutes } from '@app/routes';
import '@app/app.css';
import { LoginPage } from './LoginPage/LoginPage';


type myState = {
  role: Role;
};

export const enum Role {
  ADMIN,
  DEVELOPER,
  NONE
}

export const RoleMap = ["Admin","Developer"]
type myProps = {};

class App extends React.Component<myProps, myState> {
  constructor(props) {
    super(props);
    this.state = {
      role: Role.NONE
    };
  }

  handleRoleChange = (role: Role) => {
    this.setState({ role: role });
  }

  logout = ()=> {
    this.setState({ role: Role.NONE });
  }


  render() {
    return (
      <div>
        {this.state.role=== Role.NONE && <LoginPage setRole={this.handleRoleChange}/>}
        {this.state.role !== Role.NONE && (
          <Router>
            <AppLayout role={this.state.role} logout={this.logout}>
              <AppRoutes />
            </AppLayout>
          </Router>
        )}
      </div>
    );
  }

}


export {App};

