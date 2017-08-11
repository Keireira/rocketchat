import React from 'react';

import { socket } from 'api';

import ChatField from './ChatField';
import ChatMessage from './ChatMessage';
import OperationMsg from './OperationMsg';
import Wrapper, {
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
      messagesJsx: [],
    };
  };

  componentWillMount() {
    this.initSocketConnection();
  };

  componentWillReceiveProps(nextProps) {
    const nextTimestamp = nextProps.selectedOperation.timestamp;
    const currentTimestamp = this.props.selectedOperation.timestamp;

    if (nextTimestamp !== currentTimestamp) {
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

  getMessage = (message) => {
    const { operator, lastClient } = this.props;

    const avatar = (message.isClient) ? lastClient.avatarUrl : operator.avatarUrl;
    const name = (message.isClient) ? lastClient.displayName : operator.displayName;

    return (
      <ChatMessage
        key={message.timestamp * 1000}
        message={message.message}
        isClient={message.isClient}
        avatarUrl={avatar}
        displayName={name}
      />
    );
  };

  getOperation = (operation) => {
    const { operator } = this.props;

    return (
      <OperationMsg
        key={operation.timestamp * 1000 | 0}
        date={operation.date}
        currency={operation.currency}
        avatarUrl={operator.avatarUrl}
        timestamp={operation.timestamp}
        actionType={operation.actionType}
        cardNumber={operation.cardNumber}
        transaction={operation.transaction}
      />
    );
  };

  renderOperation = (operation) => {
    const { messagesJsx } = this.state;
    const messageJsx = this.getOperation(operation);

    messagesJsx.splice(0, 0, messageJsx);
    this.setState({ messagesJsx });
  };

  renderMessage = (message) => {
    const { messagesJsx } = this.state;
    const messageJsx = this.getMessage(message);

    messagesJsx.splice(0, 0, messageJsx);
    this.setState({ messagesJsx }, () => {
      this.forceUpdate();
    });
  };

  renderHistory = (messages) => {
    return messages.map((message) => {
      return (message.type === 'message')
        ? this.getMessage(message)
        : this.getOperation(message);
    });
  };

  render() {
    return (
      <Wrapper showBorder={this.state.showBorder}>
        <ChatField sendMessage={this.sendMessage} />

        <ChatHistoryWrapper>
          <ScrollContainer onScroll={this.scrollChat}>
            <Content>
              {this.state.messagesJsx}
            </Content>
          </ScrollContainer>
        </ChatHistoryWrapper>
      </Wrapper>
    );
  };
};

export default Chat;
