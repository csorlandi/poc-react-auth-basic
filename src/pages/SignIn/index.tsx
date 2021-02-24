import React from 'react';

import { useAuth } from '../../contexts/auth';

import logo from '../../assets/logo.png';

import * as Styles from './styles';

function SignIn() {
  const { signIn, loading } = useAuth();

  function handleSignIn() {
    signIn();
  }

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Logo src={logo} alt="Orlab's Logo"/>
        <Styles.Title>SIGN IN</Styles.Title>
        <Styles.Description>Enter your access credentials</Styles.Description>
        <Styles.Label>E-mail</Styles.Label>
        <Styles.Input type="email" placeholder="example@domain.com" />
        <Styles.Label>Password</Styles.Label>
        <Styles.Input type="password" placeholder="****************" />
        <Styles.Button onClick={handleSignIn}>
          { loading ? 'Loading ...' : 'SIGN IN' }
        </Styles.Button>
      </Styles.Content>
    </Styles.Container>
  )
}

export default SignIn;