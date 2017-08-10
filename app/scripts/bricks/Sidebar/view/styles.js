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
    pointer-events: none;
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

  padding: 110px 0;
  background-color: ${({ theme }) => theme.white(1)};
  border-left: 1px solid ${({ theme }) => theme.light_platinum(1)};
  border-right: 1px solid ${({ theme }) => theme.light_platinum(1)};

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


// General styles
export const SubText = styled.div`
  width: 100%;
  display: block;

  font-size: .875rem;
  white-space: nowrap;
  color: ${({ theme }) => theme.spanish_gray(1)};
`;

export const SubInfo = styled.div`
  margin-top: 15px;
`;

export const MainWrapper = styled.div`
  width: 100%;

  font-family: 'roboto-regular';
  line-height: 1.25rem;

  transition: all .25s ease-in-out;
  padding: 32px 40px;

  &:hover {
    cursor: default;
    background-color: ${({ theme }) => theme.snow(1)};
  }
`;

export const IconWrapper = styled(NavLink)`
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

export const ProductBalance = styled.div`
  display: block;
  width: 100%;

  font-size: 1.5rem;
  margin-top: .8rem;
`;

export const ProductNumber = styled.div`
  display: block;
  width: 100%;

  font-size: 1.25rem;
`;

export const InfoWrapper = styled.div`
  position: relative;
  color: ${({ theme }) => theme.jet(1)};
`;

export const HistoryTitle = styled.div`
  font-size: 1rem;
  padding: .75rem 2.5rem;
`;

export const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  overflow-y: scroll;

  width: 100%;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  font-size: .875rem;
  line-height: 1.25rem;
  font-family: 'roboto-regular';
  color: ${({ theme }) => theme.spanish_gray(1)};
`;

export const HistoryContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HistoryItemWrapper = styled.div`
  width: 100%;
  padding: .75rem 2.5rem;

  &:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.snow(1)};
  }

  &:hover {
    cursor: default;
  }
`;
