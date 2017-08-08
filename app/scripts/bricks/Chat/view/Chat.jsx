import React from 'react';

import ChatField from './ChatField';
import { StyledChat, ChatHistyWrapper, Test } from './styles';

class Chat extends React.PureComponent {
  render() {
    return (
      <StyledChat>
        <ChatField sendMessage={undefined} />

        <ChatHistyWrapper>
          <Test />
        </ChatHistyWrapper>
      </StyledChat>
    );
  };
};

export default Chat;
