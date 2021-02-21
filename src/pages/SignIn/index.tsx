import React from 'react';

import logo from '../../assets/logo.png';

import './index.css';

const SignIn: React.FC = () => {
  return (
    <div className="sign-in-page">
      <img src={logo} alt="CL Logo"/>
      <input type="text" defaultValue="test@email.com" />
      <input type="password" defaultValue="12345678" />
      <button onClick={() => {}}>
        Entrar
      </button>
    </div>
  )
}

export default SignIn;