import styled from 'styled-components';

export const Tab = styled.div`
  width: 50%;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'roboto-regular';
  font-size: 1.25rem;
  line-height: 1.25rem;
  height: 100%;
  color: ${({ isActive, theme }) => (isActive) ? theme.white(1) : theme.blue_jeans(1)};
  background-color: ${({ isActive, theme }) => (isActive) ? theme.blue_jeans(1) : theme.white(1)};

  transition: all .25s ease-in-out;

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
  height: 100vh;
  margin-top: 2.5rem;
  overflow-y: scroll;
`;

export const StyledSidebar = styled.div`
  width: 38%;
  min-width: 543px;
  height: 100vh;

  padding: 110px 0 55px;
  background-color: ${({ theme }) => theme.white(1)};
  border-left: 1px solid ${({ theme }) => theme.light_platinum(1)};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
