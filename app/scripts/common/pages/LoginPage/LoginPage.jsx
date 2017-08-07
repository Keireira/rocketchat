import React from 'react';

import { socket } from 'api';
import locales from 'locales';

import { StyledLoginPage, ChatNotify, ChatCaption, Accent, ClientCounts } from './styles';

class LoginPage extends React.PureComponent {
  constructor() {
    super();

    this.socket = null;
    this.state = {
      clients: [],
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
      this.socket.emit('get_clients_init');
    });

    this.socket.on('get_clients', ({ clients }) => {
      this.setState({ clients });
    });

    this.socket.on('new_client', ({ client }) => {
      this.setState((prevState) => ({
        clients: prevState.clients.concat([client]),
      }));
    });
  };

  destroySocketConnection = () => {
    this.socket.disconnect();
    this.socket = null;
  };

  render() {
    return (
      <StyledLoginPage>
        <ChatNotify to="/chat/">
          <Accent>!</Accent>
          {this.state.clients.length > 0 && <ClientCounts>{this.state.clients.length}</ClientCounts> }
        </ChatNotify>

        <ChatCaption>
          {locales.select_chat}
        </ChatCaption>
      </StyledLoginPage>
    );
  };
};

export default LoginPage;
