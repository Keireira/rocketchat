import styled from 'styled-components';

export const CardContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledHistoryCard = styled.div`
  width: 100%;
  padding: .75rem 2.5rem;

  &:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.snow(1)};
  }

  &:hover {
    cursor: default;
  }
`;
