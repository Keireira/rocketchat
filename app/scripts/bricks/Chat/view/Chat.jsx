import React from 'react';

import ChatField from './ChatField';
import { StyledChat } from './styles';

class Chat extends React.PureComponent {
  render() {
    return (
      <StyledChat>
        <ChatField sendMessage={undefined} />
      </StyledChat>
    );
  };
};

export default Chat;
