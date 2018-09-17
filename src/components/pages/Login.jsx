import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {LoginLayout} from 'components/layouts';
import {LoginForm} from 'components/login';

class Login extends Component {
  render() {
    return (
      <LoginLayout>
        <LoginForm/>
      </LoginLayout>
    );
  }
}

export default withRouter(Login)

