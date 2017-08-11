import styled from 'styled-components';
import ChatField from './ChatField/styles';

export const Content = styled.div`
  width: 100%;
`;

export const ScrollContainer = styled.div`
  width: 100%;
  flex-grow: 1;

  overflow-y: auto;
  padding-right: 70px;
  margin-right: 9px;

  &::-webkit-scrollbar {
    position: absolute;
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

export default styled.div`
  flex-grow: 1;
  height: 100vh;
  background-color: ${({ theme }) => theme.white_smoke(1)};

  display: flex;
  flex-direction: column;

  & > ${ChatField} {
    box-shadow: ${({ showBorder }) => (showBorder) ? '0 5px 5px rgba(0, 0, 0, 0.05)' : 'none'};
  }
`;
