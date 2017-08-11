import React from 'react';

import ChatField from './ChatField';
import ChatMessage from './ChatMessage';
import OperationMsg from './OperationMsg';
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

              <OperationMsg
                avatarUrl={operator.avatarUrl}
                carriedOut={1000000}
                actionType="top_up"
                cardNumber="4444"
                transaction={2000}
                currency="$"
              />
            </Content>
          </ScrollContainer>
        </ChatHistoryWrapper>
      </StyledChat>
    );
  };
};

export default Chat;
