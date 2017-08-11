import React from 'react';

import { socket } from 'api';

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
  constructor() {
    super();

    this.socket = null;
    this.state = {
      showBorder: false,
      messages: [],
      messagesJsx: [],
    };
  };

  componentWillMount() {
    this.initSocketConnection();
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedOperation.timestamp !== this.props.selectedOperation.timestamp) {
      this.renderOperation(nextProps.selectedOperation);
    }
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
      this.setState({
        messagesJsx: this.renderHistory(messages),
      });

      this.socket.emit('msg init');
    });

    this.socket.on('msg to client', (message) => {
      this.renderMessage(message);
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

  renderOperation = (operation) => {
    const { operator } = this.props;
    const { messagesJsx } = this.state;

    const messageJsx = (
      <OperationMsg
        key={operation.timestamp}
        currency={operation.currency}
        avatarUrl={operator.avatarUrl}
        timestamp={operation.timestamp}
        actionType={operation.actionType}
        cardNumber={operation.cardNumber}
        transaction={operation.transaction}
      />
    );

    messagesJsx.splice(0, 0, messageJsx);
    this.setState({ messagesJsx });
  };

  renderMessage = (message) => {
    const { messagesJsx } = this.state;
    const { operator, lastClient } = this.props;

    const avatar = (message.isClient) ? lastClient.avatarUrl : operator.avatarUrl;
    const name = (message.isClient) ? lastClient.displayName : operator.displayName;

    const messageJsx = (
      <ChatMessage
        key={message.timestamp}
        message={message.message}
        isClient={message.isClient}
        avatarUrl={avatar}
        displayName={name}
      />
    );

    messagesJsx.splice(0, 0, messageJsx);
    this.setState({ messagesJsx }, () => {
      this.forceUpdate();
    });
  };

  renderHistory = (messages) => {
    const { operator, lastClient } = this.props;

    return messages.map((message) => {
      const avatar = (message.isClient) ? lastClient.avatarUrl : operator.avatarUrl;
      const name = (message.isClient) ? lastClient.displayName : operator.displayName;

      return (message.type === 'message') ? (
        <ChatMessage
          key={message.timestamp}
          message={message.message}
          isClient={message.isClient}
          avatarUrl={avatar}
          displayName={name}
        />
      ) : (
        <OperationMsg
          avatarUrl={operator.avatarUrl}
          timestamp={1000000}
          actionType="top_up"
          cardNumber="4444"
          transaction={2000}
          currency="$"
        />
      );
    });
  };

  render() {
    return (
      <StyledChat showBorder={this.state.showBorder}>
        <ChatField sendMessage={this.sendMessage} />

        <ChatHistoryWrapper>
          <ScrollContainer onScroll={this.scrollChat}>
            <Content>
              {this.state.messagesJsx}
            </Content>
          </ScrollContainer>
        </ChatHistoryWrapper>
      </StyledChat>
    );
  };
};

export default Chat;
