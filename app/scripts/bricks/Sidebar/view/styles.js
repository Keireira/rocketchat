import styled from 'styled-components';

export const StyledSidebar = styled.div`
  width: 38%;
  height: 100vh;
  background-color: ${({ theme }) => theme.white_smoke(1)};
  border-left: 2px solid ${({ theme }) => theme.gainsboro(1)};
`;
