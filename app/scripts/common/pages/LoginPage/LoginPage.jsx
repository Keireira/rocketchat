import React from 'react';

import locales from 'locales';

import { StyledLoginPage, ChatNotify, ChatCaption, Accent, ClientCounts } from './styles';

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <ChatNotify to="/chat/accounts/">
        <Accent>!</Accent>
        <ClientCounts>99</ClientCounts>
      </ChatNotify>

      <ChatCaption>
        {locales.select_chat}
      </ChatCaption>
    </StyledLoginPage>
  );
};

export default LoginPage;
