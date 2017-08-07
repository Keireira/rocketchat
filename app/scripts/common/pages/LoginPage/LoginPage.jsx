import React from 'react';

import locales from 'locales';

import { StyledLoginPage, ChatNotify, ChatCaption } from './styles';

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <ChatNotify to="/chat/accounts/">
        !
      </ChatNotify>

      <ChatCaption>
        {locales.select_chat}
      </ChatCaption>
    </StyledLoginPage>
  );
};

export default LoginPage;
