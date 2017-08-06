import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CartIcon = styled(NavLink)`
  display: flex;

  position: absolute;
  right: -10px;
  top: -10px;

  padding: 10px;
  transition: all .2s ease-in-out;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.gainsboro(1)};
  }
`;

export const AccountBalance = styled.div`
  display: block;
  width: 100%;

  font-size: 1.5rem;
  margin-top: .8rem;
`;

export const AccountNumber = styled.div`
  display: block;
  width: 100%;

  font-size: 1.25rem;
`;

export const StyledAccountInfo = styled.div`
  position: relative;
  color: ${({ theme }) => theme.jet(1)};
`;
