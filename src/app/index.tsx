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
  USER,
  NONE
}
type myProps = {};

class App extends React.Component<myProps, myState> {
  constructor(props) {
    super(props);
    this.state = {
      role: Role.NONE
    };
  }

  handleRoleChange = (role: Role) => {
    this.setState({ role: role }, () => console.log({ ...this.state }));
  }

  render() {
    return (
      <div>
        {this.state.role=== Role.NONE && <LoginPage setRole={this.handleRoleChange}/>}
        {this.state.role !== Role.NONE && (
          <Router>
            <AppLayout>
              <AppRoutes />
            </AppLayout>
          </Router>
        )}
      </div>
    );
  }

}

export { App };
