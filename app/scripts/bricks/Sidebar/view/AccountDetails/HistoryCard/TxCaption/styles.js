import styled from 'styled-components';

export const HiddenNums = styled.sup`
  font-size: 1rem;
  margin: -.1rem .1rem 0 .2rem;
`;

export const TxTitle = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  color: ${({ theme }) => theme.raisin_black(1)};
`;

export const StyledTxCaption = styled.div`
  display: flex;
  flex-direction: column;
`;
