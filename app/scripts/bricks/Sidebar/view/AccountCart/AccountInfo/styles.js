import styled from 'styled-components';

export const CartIcon = styled.a`
  display: flex;

  position: absolute;
  right: -5px;
  top: -5px;

  transition: all .15s ease-in-out;
  border: 1px solid transparent;
  padding: 4px;

  &:hover {
    cursor: pointer;
    border-color: ${({ theme }) => theme.spanish_gray(1)};
    background-color: ${({ theme }) => theme.white(1)};
  }
`;

export const AccountBalance = styled.span`
  display: flex;

  font-size: 1.5rem;
  margin-top: .8rem;
`;

export const AccountNumber = styled.span`
  display: flex;

  font-size: 1.25rem;
`;

export const StyledAccountInfo = styled.div`
  position: relative;
  color: ${({ theme }) => theme.jet(1)};
`;
