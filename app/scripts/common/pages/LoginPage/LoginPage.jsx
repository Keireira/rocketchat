import React from 'react';

import { StyledLoginPage, ChatNotify } from './styles';

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <ChatNotify to="/chat/accounts/">
        !
      </ChatNotify>
    </StyledLoginPage>
  );
};

export default LoginPage;
