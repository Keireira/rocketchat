import React from 'react';
import { StyledClientInfo, Avatar } from './styles';

const ClientInfo = (props) => {
  const enterChat = () => {
    if (typeof props.selectClient === 'function') {
      props.selectClient({
        userId: props.userId,
        isClient: props.isClient,
        avatarUrl: props.avatarUrl,
        displayName: props.displayName,
      });
    }
  };

  return (
    <StyledClientInfo to="/chat/" onClick={enterChat}>
      <Avatar img={props.avatarUrl} />
      <span>{props.displayName}</span>
    </StyledClientInfo>
  );
};

export default ClientInfo;
