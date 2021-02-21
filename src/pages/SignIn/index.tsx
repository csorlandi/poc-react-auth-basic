import React from 'react';

import logo from '../../assets/logo.png';

import * as Styles from './styles';

function SignIn() {
  return (
    <Styles.Container>
      <Styles.Logo src={logo} alt="CL Logo"/>
      <Styles.Input type="text" defaultValue="test@email.com" />
      <Styles.Input type="password" defaultValue="12345678" />
      <Styles.Button onClick={() => {}}>
        Entrar
      </Styles.Button>
    </Styles.Container>
  )
}

export default SignIn;