import styled from 'styled-components';
import { HistoryContent } from 'bricks/Sidebar/view/styles';

export const IconWrapper = styled.a`
  display: flex;

  transform: translateX(10px);

  padding: 10px;
  transition: all .2s ease-in-out;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.gainsboro(1)};
  }
`;

export const TxCaption = styled.div`
  font-size: .875rem;
  color: ${({ theme }) => theme.jet(1)};
`;

export const TxAmount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Balance = styled.span`
  flex-grow: 1;
  text-align: right;
  white-space: nowrap;
  color: ${({ theme }) => theme.harlequin_green(1)};

  &::before {
    content: '+ ';
    margin-left: .5rem;
  }
`;
