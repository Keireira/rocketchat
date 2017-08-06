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

  font-size: 1.25rem;
  line-height: 1.25rem;
  font-family: 'roboto-regular';
  color: ${({ theme }) => theme.blue_jeans(1)};

  padding: .875rem 0;
  transition: all .25s ease-in-out;
  background-color: $${({ theme }) => theme.white(1)};

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
  height: 47px;
  min-height: 47px;
  width: calc(100% - 200px);

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  border-radius: .25rem;
  border: 1px solid ${({ theme }) => theme.blue_jeans(1)};
`;

export const Content = styled.div`
  height: 100%;
  width: calc(100% - 120px);

  display: flex;
  flex-direction: column;

  margin-top: 2.5rem;

  ${media.beta`
    margin-top: 2rem;
  `}
`;

export const StyledSidebar = styled.div`
  width: 38%;
  height: 100vh;
  min-width: 543px;

  padding: 110px;
  background-color: ${({ theme }) => theme.white(1)};
  border-left: 1px solid ${({ theme }) => theme.light_platinum(1)};

  ${media.beta`
    padding: 55px 0;
  `}
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;
