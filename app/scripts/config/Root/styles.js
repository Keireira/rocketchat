import styled from 'styled-components';

export const Root = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${({ theme }) => theme.snow(1)}
`;
