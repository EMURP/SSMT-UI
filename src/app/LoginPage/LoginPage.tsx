import React from 'react';
import {
  LoginForm,
  LoginPage as PatternflyLoginPage,
  ListVariant,
  Button
} from '@patternfly/react-core';
import { ExclamationCircleIcon } from '@patternfly/react-icons';
import * as OAuth from 'oauth2-client-js';

import { Role } from '..';
import mocLogo from './moc_logo.png';

// get user info from CILogon
async function getUserEmail(code: string) {
  const { access_token } = await fetch('https://cilogon.org/oauth2/token', {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST",
    body: `grant_type=authorization_code&client_id=cilogon:/client_id/566ba77604386302bd6e0f63cfa0efe0&client_secret=${process.env.CILOGON_SECRET}&redirect_uri=http://localhost:9000&code=${code}`
  }).then(r => r.json());
  const userInfo = await fetch('https://cilogon.org/oauth2/userinfo', {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: 'POST',
    body: `access_token=${access_token}`
  }).then(r => r.json());
  return userInfo.email;
}

type LoginState = {
  username: string;
  password: string;
  submit: boolean;
  error?: string;
};

type LoginProps = {
  setRole: Function;
  setEmail: Function;
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

  // Detect if CILogon has authenticated, then log into app if it has.
  async componentDidMount() {
    const query = window.location.search;
    if (query.includes('code')) { // CILogon has returned with code
      // remove query & CILogon state from URL, without reloading page
      console.log('hi')
      const code = new URLSearchParams(query).get('code');
      const urlWithoutQuery = window.location.protocol + "//" + window.location.host + window.location.pathname
      window.history.pushState({ path: urlWithoutQuery }, '', urlWithoutQuery);
      this.props.setRole(Role.ADMIN);
      localStorage.setItem('login', 'ADMIN');
      if (code) {
        const email = await getUserEmail(code);
        this.props.setEmail(email);
        localStorage.setItem('email', email);
      }
    } else if (localStorage.getItem('login')) {
      const storedRole = localStorage.getItem('login');
      if (storedRole === 'ADMIN') {
        this.props.setRole(Role.ADMIN);
      } else if (storedRole === 'DEVELOPER') {
        this.props.setRole(Role.DEVELOPER);
      }
    }
    if (localStorage.getItem('email')) {
      this.props.setEmail(localStorage.getItem('email'));
    }
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
      localStorage.setItem('login', 'ADMIN');
    } else if ((username === 'developer1' && password === 'developer1') || (username === 'developer2' && password === 'developer2')) {
      role = Role.DEVELOPER;
      localStorage.setItem('login', 'DEVELOPER');
    } else {
      role = Role.NONE;
      this.setState({ ...this.state, error: "Invalid Username/Password" })
    }
    this.props.setRole(role);
  }

  handleCiLogon = () => {
    // Register provider
    const ciLogonProvider = new OAuth.Provider({
      id: 'cilogon',
      authorization_url: 'https://cilogon.org/authorize'
    })

    // Create a new request
    var request = new OAuth.Request({
      client_id: 'cilogon:/client_id/566ba77604386302bd6e0f63cfa0efe0',  // required
      redirect_uri: 'http://localhost:9000',
      scope: 'openid+profile+email+org.cilogon.userinfo',
      response_type: 'code'
    });

    // Give it to the provider
    var uri = ciLogonProvider.requestToken(request);

    // Redirect to CILogon authentication page
    window.location.href = uri;
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
        footerListItems={[
          <Button onClick={this.handleCiLogon} key="cilogon">Login with Institution/Google Account</Button>
        ]}
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
