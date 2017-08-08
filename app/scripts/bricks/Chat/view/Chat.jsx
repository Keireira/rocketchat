import React from 'react';

import ChatField from './ChatField';
import ChatMessage from './ChatMessage';
import {
  StyledChat,
  ChatHistoryWrapper,
  ScrollContainer,
  Content,
} from './styles';

class Chat extends React.PureComponent {
  render() {
    const { operator, lastClient } = this.props;

    return (
      <StyledChat>
        <ChatField sendMessage={undefined} />

        <ChatHistoryWrapper>
          <ScrollContainer>
            <Content>
              <ChatMessage
                message="Test mesage from operator."
                isClient={operator.isClient}
                avatarUrl={operator.avatarUrl}
                displayName={operator.displayName}
              />

              <ChatMessage
                message="Test mesage from client."
                isClient={lastClient.isClient}
                avatarUrl={lastClient.avatarUrl}
                displayName={lastClient.displayName}
              />
            </Content>
          </ScrollContainer>
        </ChatHistoryWrapper>
      </StyledChat>
    );
  };
};

export default Chat;
