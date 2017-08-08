import React from 'react';

import ChatField from './ChatField';
import { StyledChat } from './styles';

class Chat extends React.PureComponent {
  render() {
    return (
      <StyledChat>
        <ChatField />
      </StyledChat>
    );
  };
};

export default Chat;
