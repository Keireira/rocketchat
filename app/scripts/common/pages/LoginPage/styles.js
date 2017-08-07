import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { trambling } from 'styles/utils/animations';

export const ClientCounts = styled.div`
  font-size: 1.5rem;
  height: 3rem;
  width: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  border-radius: 50%;
  color: ${({ theme }) => theme.maximum_red(1)};
  background-color: ${({ theme }) => theme.white_smoke(1)};
  transform: translate3d(-50%, -50%, 0);
  transition: all .25s ease-in-out;

  border: 2px solid ${({ theme }) => theme.maximum_red(1)};
`;

export const Accent = styled.div`
  font-size: 4rem;
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

export const ChatCaption = styled.div`
  font-family: 'roboto-regular';
  text-transform: uppercase;
  font-weight: bold;
  font-size: 8rem;
  padding: 1rem;
  border-radius: 1rem;
  user-select: none;
  cursor: default;

  color: ${({ theme }) => theme.white_smoke(1)};
  background-color: ${({ theme }) => theme.white(1)};

  text-shadow: 3px 3px 1px ${({ theme }) => theme.gainsboro(1)};
  box-shadow: inset 3px 3px 1px ${({ theme }) => theme.gainsboro(1)};
`;

export const ChatNotify = styled(Link)`
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

  & > ${Accent} {
    animation-name: ${trambling};
    animation-duration: 1.5s;
    animation-play-state: running;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  background-color: transparent;
  color: ${({ theme }) => theme.blue_jeans(1)};
  border: 2px solid ${({ theme }) => theme.blue_jeans(1)};

  &:hover {
    & > ${Accent} {
      animation-play-state: paused;
    }

    & > ${ClientCounts} {
      color: ${({ theme }) => theme.white_smoke(1)};
      background-color: ${({ theme }) => theme.maximum_red(1)};
    }

    color: ${({ theme }) => theme.white_smoke(1)};
    background-color: ${({ theme }) => theme.blue_jeans(1)};
  }
`;
