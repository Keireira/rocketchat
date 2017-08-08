import styled from 'styled-components';

export const Test = styled.div`
  width: 100%;
  height: 200vh;
  background-color: green;
`;

export const ChatHistyWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  background-color: red;
  padding: 20px 100px;
  overflow: auto;
`;

export const StyledChat = styled.div`
  flex-grow: 1;
  height: 100vh;
  background-color: ${({ theme }) => theme.white_smoke(1)};

  display: flex;
  flex-direction: column;
`;
