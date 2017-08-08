import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
`;

export const ScrollContainer = styled.div`
  width: 100%;
  flex-grow: 1;

  overflow: auto;
  padding-right: 70px;

  &::-webkit-scrollbar {
    overflow: hidden;

    width: 9px;
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

export const ChatHistoryWrapper = styled.div`
  width: 100%;

  flex-grow: 1;
  display: flex;
  flex-direction: column;

  padding: 0 30px 30px 106px;
`;

export const StyledChat = styled.div`
  flex-grow: 1;
  height: 100vh;
  background-color: ${({ theme }) => theme.white_smoke(1)};

  display: flex;
  flex-direction: column;
`;
