import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { trambling } from 'styles/utils/animations';

export const StyledLoginPage = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;

  position: relative;

  background-color: ${({ theme }) => theme.white_smoke(1)};
`;

export const ChatNotify = styled(Link)`
  font-size: 4rem;
  font-weight: bold;
  font-family: 'roboto-regular';

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 2rem;
  right: 2rem;

  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  transition: all .25s ease-in-out;

  animation-name: ${trambling};
  animation-delay: 2s;
  animation-duration: 1s;
  animation-play-state: running;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  background-color: transparent;
  color: ${({ theme }) => theme.blue_jeans(1)};
  border: 2px solid ${({ theme }) => theme.blue_jeans(1)};

  &:hover {
    animation-play-state: paused;

    color: ${({ theme }) => theme.white_smoke(1)};
    background-color: ${({ theme }) => theme.blue_jeans(1)};
  }
`;
