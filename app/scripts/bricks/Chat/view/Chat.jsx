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
    const { operator } = this.props;

    return (
      <StyledChat>
        <ChatField sendMessage={undefined} />

        <ChatHistoryWrapper>
          <ScrollContainer>
            <Content>
              <ChatMessage
                message=""
                isClient={operator.isClient}
                avatarUrl={operator.avatarUrl}
                displayName={operator.displayName}
              />
            </Content>
          </ScrollContainer>
        </ChatHistoryWrapper>
      </StyledChat>
    );
  };
};

export default Chat;
