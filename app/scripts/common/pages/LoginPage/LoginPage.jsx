import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { socket } from 'api';
import locales from 'locales';
import { selectClient } from 'actions/users';

import ClientInfo from './ClientInfo';
import { ClientsList, ChatCounter, ChatCaption, ChatNotify, StyledLoginPage } from './styles';

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

  makeClientsList = () => {
    return this.state.clients.map((client) => {
      return <ClientInfo key={client.userId} selectClient={this.props.selectClient} {...client} />;
    });
  };

  render() {
    const clientsList = this.makeClientsList();

    return (
      <StyledLoginPage>
        <ChatNotify>
          <ChatCounter>{this.state.clients.length}</ChatCounter>

          <ClientsList>
            {clientsList}
          </ClientsList>
        </ChatNotify>

        <ChatCaption>
          {locales.select_chat}
        </ChatCaption>
      </StyledLoginPage>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  selectClient(clientData) {
    dispatch(selectClient['START'](clientData));
  },
});

export default compose(
  connect(null, mapDispatchToProps),
)(LoginPage);
