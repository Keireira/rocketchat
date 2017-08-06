import styled, { injectGlobal } from 'styled-components';
import { media } from 'styles/utils';
import { NavLink } from 'react-router-dom';

export const Tab = styled(NavLink).attrs({
  activeClassName: 'selectedTab',
})`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'roboto-regular';
  font-size: 1.25rem;
  line-height: 1.25rem;
  padding: .875rem 0;
  color: ${({ theme }) => theme.blue_jeans(1)};
  background-color: $${({ theme }) => theme.white(1)};

  transition: all .25s ease-in-out;

  &.selectedTab {
    color: ${({ theme }) => theme.white(1)};
    background-color: ${({ theme }) => theme.blue_jeans(1)};
  }

  &:hover {
    cursor: ${({ isActive }) => (isActive) ? 'default' : 'pointer'};

    color: ${({ theme }) => theme.white(1)};
    background-color: ${({ theme }) => theme.blue_jeans(1)};
  }
`;

export const Tabs = styled.div`
  width: calc(100% - 200px);
  min-height: 47px;
  height: 47px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: .25rem;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.blue_jeans(1)};
`;

export const Content = styled.div`
  width: calc(100% - 120px);
  margin-top: 2.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;

  ${media.beta`
    margin-top: 2rem;
  `}
`;

export const StyledSidebar = styled.div`
  width: 38%;
  min-width: 543px;
  height: 100vh;

  padding: 110px;
  background-color: ${({ theme }) => theme.white(1)};
  border-left: 1px solid ${({ theme }) => theme.light_platinum(1)};

  ${media.beta`
    padding: 55px 0;
  `}
`;

export const Helper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
