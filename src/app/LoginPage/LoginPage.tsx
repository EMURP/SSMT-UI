import React from 'react';
import {
  LoginForm,
  LoginPage as PatternflyLoginPage,
  ListVariant
} from '@patternfly/react-core';
import { ExclamationCircleIcon } from '@patternfly/react-icons';

import { Role } from '..';
import mocLogo from './moc_logo.png';

type LoginState = {
  username: string;
  password: string;
  submit: boolean;
  error?: string;
};

type LoginProps = {
  setRole: Function;
};

class LoginPage extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      username: '',
      password: '',
      submit: false,
    };
  }

  handleUsernameChange = (userNameInput: string) => {
    this.setState({ username: userNameInput });
  }

  handlePasswordChange = (passwordInput: string) => {
    this.setState({ password: passwordInput });
  }

  handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    // dynamic call
    const { username, password } = this.state;
    let role: Role;
    if (username === 'admin' && password === 'admin') {
      role = Role.ADMIN;
    } else if ((username === 'developer1' && password === 'developer1') || (username === 'developer2' && password === 'developer2')) {
      role = Role.DEVELOPER;
    } else {
      role = Role.NONE;
      this.setState({ ...this.state, error: "Invalid Username/Password" })
    }
    this.props.setRole(role);
  }

  render() {
    
    const loginForm = (
      <LoginForm
        showHelperText={!!this.state.error}
        helperText={this.state.error}
        helperTextIcon={<ExclamationCircleIcon />}
        usernameLabel="Username"
        usernameValue={this.state.username}
        onChangeUsername={this.handleUsernameChange}
        passwordLabel="Password"
        passwordValue={this.state.password}
        onChangePassword={this.handlePasswordChange}
        onLoginButtonClick={this.handleSubmit}
      />
    );

    return (
      <PatternflyLoginPage
        style={{ 
          background: 'linear-gradient(0deg, gray, transparent)',
        }}
        footerListVariants={ListVariant.inline}
        brandImgSrc={mocLogo}
        brandImgAlt="MOC logo"
        textContent="Mass Open Cloud OCP Metering"
        loginTitle="Log in to your account"
        loginSubtitle="Please use your MOC credentials"
      >
        {loginForm}
      </PatternflyLoginPage>
    );
  }
}

export { LoginPage };
