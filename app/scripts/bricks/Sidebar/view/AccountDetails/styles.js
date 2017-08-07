import styled from 'styled-components';

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

export const StyledAccountDetails = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  font-size: .875rem;
  line-height: 1.25rem;
  font-family: 'roboto-regular';
  color: ${({ theme }) => theme.spanish_gray(1)};
`;
