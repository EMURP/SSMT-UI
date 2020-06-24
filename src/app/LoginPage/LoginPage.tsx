import React from 'react';
import {
  Form,
  FormGroup,
  TextInput,
  TextArea,
  FormSelect,
  Checkbox,
  Popover,
  ActionGroup,
  Button,
  Radio
} from '@patternfly/react-core';
type myState = {
  userName: string;
  password: string;
  submit: boolean;
};
// export const enum Role{
const enum Role {
  ADMIN,
  USER,
  NONE
}
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
    this.setState({ userName: userNameInput }, () => console.log({ ...this.state }));
  }

  handlePasswordChange(passwordInput: string) {
    this.setState({ password: passwordInput }, () => console.log(this.state));
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
      role = Role.USER;
    } else {
      role = Role.NONE;
    }
    this.props.setRole(role);
  }
}

export { LoginPage };
