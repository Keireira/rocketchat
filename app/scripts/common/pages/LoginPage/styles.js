import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ClientsList = styled.div`
  display: none;

  position: absolute;
  bottom: -1rem;
  right: -1rem;

  min-width: 200px;
  max-height: 50vh;
  overflow-y: scroll;
`;

export const ChatCounter = styled.div`
  font-size: 2rem;
`;

export const ChatCaption = styled.div`
  font-size: 7rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'roboto-regular';
  color: ${({ theme }) => theme.gainsboro(1)};

  cursor: default;
  user-select: none;
`;

export const ChatNotify = styled.div`
  font-weight: bold;
  font-family: 'roboto-regular';

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 2rem;
  right: 2rem;

  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  transition: all .25s ease-in-out;

  background-color: transparent;
  color: ${({ theme }) => theme.maximum_red(1)};
  border: 2px solid ${({ theme }) => theme.maximum_red(1)};

  &:hover {
    & > ${ClientsList} {
      display: block;
    }
  }
`;

export const StyledLoginPage = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  background-color: ${({ theme }) => theme.white_smoke(1)};
`;
