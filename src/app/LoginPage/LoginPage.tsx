import React from 'react';
import {
  Form,
  FormGroup,
  TextInput,
  ActionGroup,
  Button,
} from '@patternfly/react-core';
import { Role } from '..';
type myState = {
  userName: string;
  password: string;
  submit: boolean;
  error?: string;
};
// export const enum Role{
type myProps = {
  setRole: Function;
};

class LoginPage extends React.Component<myProps, myState> {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      submit: false,
    };
  }

  handleUserNameChange(userNameInput: string) {
    this.setState({ userName: userNameInput })
  }

  handlePasswordChange(passwordInput: string) {
    this.setState({ password: passwordInput })
  }

  render() {
    return (
      <div>
          <Form>
            <FormGroup label="Username" isRequired fieldId="simple-form-username">
              <TextInput
                isRequired
                type="text"
                id="simple-form-username"
                name="simple-form-username"
                value={this.state.userName}
                onChange={value => this.handleUserNameChange(value)}
              />
            </FormGroup>
            <FormGroup label="Password" isRequired fieldId="simple-form-password">
              <TextInput
                isRequired
                type="password"
                id="simple-form-password"
                placeholder="Password"
                name="simple-form-password"
                value={this.state.password}
                onChange={value => this.handlePasswordChange(value)}
              />
            </FormGroup>

            <ActionGroup>
              <Button variant="primary" onClick={() => this.handleSubmit()}>
                Login
              </Button>
              {/* <Button variant="link">Cancel</Button> */}
            </ActionGroup>
          </Form>
          {this.state.error}
      </div>
    );
  }
  handleSubmit() {
    // dynamic call
    const userName = this.state.userName;
    const password = this.state.password;
    let role: Role;
    if (userName === 'admin' && password === 'admin') {
      role = Role.ADMIN;
    } else if (userName === 'developer' && password === 'developer') {
      role = Role.DEVELOPER;
    } else {
      role = Role.NONE;
      this.setState({...this.state, error:"Invalid Username/Password"})
    }
    this.props.setRole(role);
  }
}

export { LoginPage };
