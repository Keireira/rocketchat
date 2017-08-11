import React from 'react';
import PropTypes from 'prop-types';

import Wrapper, { Avatar, Message, Name, Text } from './styles';

const ChatMessage = ({ isClient, avatarUrl, displayName, message }) => {
  return (
    <Wrapper isClient={isClient}>
      <Avatar url={avatarUrl} isClient={isClient} />

      <Message>
        <Name>{`${displayName}: `}</Name>
        <Text>{message}</Text>
      </Message>
    </Wrapper>
  );
};

ChatMessage.propTypes = {
  isClient: PropTypes.bool,
  message: PropTypes.string,
  avatarUrl: PropTypes.string,
  displayName: PropTypes.string,
};

ChatMessage.defaultProps = {
  isClient: true,
  message: '',
  avatarUrl: 'http://placehold.it/120x120',
  displayName: 'User unknowm',
};

export default ChatMessage;
