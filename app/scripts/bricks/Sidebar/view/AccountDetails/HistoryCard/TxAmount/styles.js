import styled from 'styled-components';

export const Negative = styled.span`
  flex-grow: 1;
  text-align: right;
  white-space: nowrap;
  color: ${({ theme }) => theme.maximum_red(1)};

  &::before {
    content: '- ';
    margin-left: .5rem;
  }
`;

export const Positive = styled.span`
  flex-grow: 1;
  text-align: right;
  white-space: nowrap;
  color: ${({ theme }) => theme.harlequin_green(1)};

  &::before {
    content: '+ ';
    margin-left: .5rem;
  }
`;

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

export const StyledTxAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
