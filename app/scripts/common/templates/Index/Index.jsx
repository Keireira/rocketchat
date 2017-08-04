import React from 'react';
import styled from 'styled-components';

import { IndexTemplate } from './styles';

const StyledSidebar = styled.div`
  width: 40%;
  height: 100vh;
  background-color: ${({ theme }) => theme.white_smoke(1)};
  border-left: 2px solid ${({ theme }) => theme.gainsboro(1)};
`;

const Sidebar = ({ children }) => {
  return (
    <StyledSidebar>
      {children}
    </StyledSidebar>
  );
};

const Index = (props) => {
  return (
    <IndexTemplate>
      {props.children}

      <Sidebar>
        Sidebar
      </Sidebar>
    </IndexTemplate>
  );
};

export default Index;
