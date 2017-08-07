import React from 'react';

import { socket } from 'api';
import locales from 'locales';

import { StyledLoginPage, ChatNotify, ChatCaption, Accent, ClientCounts } from './styles';

const io = socket();

io.on('new_client', (data) => {
  console.log(data);
  io.emit('client_event', { my: 'data' });
});

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
