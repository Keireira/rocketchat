import styled from 'styled-components';

export const Tmp = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Test = styled.div`
  width: 100%;
  flex-grow: 1;
  padding-right: 60px;

  overflow: auto;

  &::-webkit-scrollbar {
    width: 9px;
    overflow: hidden;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 100px;
    background-color: ${({ theme }) => theme.platinum(1)};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background-color: ${({ theme }) => theme.blue_jeans(1)};
  }
`;

export const ChatHistyWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  padding-bottom: 30px;
  padding-right: 30px;
  padding-left: 100px;

  display: flex;
  flex-direction: column;
`;

export const StyledChat = styled.div`
  flex-grow: 1;
  height: 100vh;
  background-color: ${({ theme }) => theme.white_smoke(1)};

  display: flex;
  flex-direction: column;
`;
