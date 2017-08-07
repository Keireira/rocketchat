import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Avatar = styled.div`
  width: 42px;
  height: 42px;
  min-width: 42px;
  min-height: 42px;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ img }) => `url(${img})`};

  margin-left: 1rem;
  border-radius: 50%;
`;

export const StyledClientInfo = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;

  line-height: 1rem;
  font-size: .875rem;
  font-family: 'roboto-regular';
  color: ${({ theme }) => theme.taupe_gray(1)};

  padding: .5rem 1.5rem;
  transition: all .25s ease-in-out;
  background-color: ${({ theme }) => theme.light_platinum(1)};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.gainsboro(1)};
  }

  & > * {
    pointer-events: none;
  }
`;
