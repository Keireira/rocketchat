import React from 'react';
import locales from 'locales';
import { StyledLoginPage, LoginButton } from './styles';

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <LoginButton to="/chat">
        {locales.chat_enter}
      </LoginButton>
    </StyledLoginPage>
  );
};

export default LoginPage;