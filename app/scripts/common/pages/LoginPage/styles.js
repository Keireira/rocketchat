import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLoginPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.white_smoke(1)};
`;

export const LoginButton = styled(Link)`
  font-size: 2rem;
  font-family: 'roboto-regular';
  color: ${({ theme }) => theme.blue_jeans(1)};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem 4rem;
  border-radius: .5rem;
  border: 2px solid ${({ theme }) => theme.blue_jeans(1)};

  background-color: transparent;
  transition: all .25s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.white_smoke(1)};
    background-color: ${({ theme }) => theme.blue_jeans(1)};
  }
`;
