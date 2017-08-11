import React from 'react';

import { socket } from 'api';

import ChatField from './ChatField';
import ChatMessage from './ChatMessage';
// import OperationMsg from './OperationMsg';
import {
  StyledChat,
  ChatHistoryWrapper,
  ScrollContainer,
  Content,
} from './styles';

class Chat extends React.PureComponent {
  constructor() {
    super();

    this.socket = null;
    this.state = {
      showBorder: false,
      messages: [],
    };
  };

  componentWillMount() {
    this.initSocketConnection();
  };

  componentWillUnmount() {
    this.destroySocketConnection();
  };

  initSocketConnection = () => {
    this.socket = socket();

    this.socket.on('connect', () => {
      this.socket.emit('msg history');
    });

    this.socket.on('msg history', ({ messages }) => {
      this.setState({ messages });
      this.socket.emit('msg init');
    });

    this.socket.on('msg to client', (message) => {
      const { messages } = this.state;
      messages.splice(0, 0, message);

      this.setState({ messages }, () => {
        this.forceUpdate();
      });
    });
  };

  destroySocketConnection = () => {
    this.socket.disconnect();
    this.socket = null;
  };

  sendMessage = (message) => {
    this.socket.emit('msg to server', message);
  };

  scrollChat = (event) => {
    const wrapperScroll = event.target.getBoundingClientRect().top + 30;
    const contentScroll = event.target.firstElementChild.getBoundingClientRect().top;
    const delta = wrapperScroll - contentScroll;

    if (delta >= 10 && this.state.showBorder === false) {
      this.setState({
        showBorder: true,
      });
    } else if (delta < 10 && this.state.showBorder === true) {
      this.setState({
        showBorder: false,
      });
    };
  };

  render() {
    const { operator, lastClient } = this.props;

    return (
      <StyledChat showBorder={this.state.showBorder}>
        <ChatField sendMessage={this.sendMessage} />

        <ChatHistoryWrapper>
          <ScrollContainer onScroll={this.scrollChat}>
            <Content>
              {
                this.state.messages.map((message) => {
                  const avatar = (message.isClient) ? lastClient.avatarUrl : operator.avatarUrl;
                  const name = (message.isClient) ? lastClient.displayName : operator.displayName;

                  return (
                    <ChatMessage
                      key={message.timestamp}
                      message={message.message}
                      isClient={message.isClient}
                      avatarUrl={avatar}
                      displayName={name}
                    />
                  );
                })
              }

              {/* <OperationMsg
                avatarUrl={operator.avatarUrl}
                timestamp={1000000}
                actionType="top_up"
                cardNumber="4444"
                transaction={2000}
                currency="$"
              /> */}

            </Content>
          </ScrollContainer>
        </ChatHistoryWrapper>
      </StyledChat>
    );
  };
};

export default Chat;
