import styled from 'styled-components';

export const StyledAccountDetails = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const HistoryTitle = styled.div`
  font-family: 'roboto-regular';
  font-size: 1rem;
  line-height: 1.25rem;
  padding: .75rem 2.5rem;
  color: ${({ theme }) => theme.spanish_gray(1)};
`;

export const Time = styled.span`
  display: flex;
  width: 100%;
`;

export const HistoryCart = styled.div`
  width: 100%;
  padding: .75rem 2.5rem;

  &:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.snow(1)};
  }

  &:hover {
    cursor: default;
  }
`;

export const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: scroll;

  color: ${({ theme }) => theme.spanish_gray(1)};
  font-family: 'roboto-regular';
  line-height: 1.25rem;
  font-size: .875rem;

  width: 100%;
`;

export const NegativeVal = styled.span`
  color: ${({ theme }) => theme.maximum_red(1)};

  &::before {
    content: '- ';
    margin-left: .5rem;
  }
`;

export const PositiveVal = styled.span`
  color: ${({ theme }) => theme.harlequin_green(1)};

  &::before {
    content: '+ ';
    margin-left: .5rem;
  }
`;

export const HiddenNums = styled.sup`
  font-size: 1rem;
  margin: -.1rem .1rem 0 .2rem;
`;

export const Operation = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  color: ${({ theme }) => theme.raisin_black(1)};
`;

export const Icon = styled.a`
  display: flex;

  position: absolute;
  right: -10px;
  top: 50%;
  transform: translateY(-50%);

  padding: 10px;
  transition: all .2s ease-in-out;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.gainsboro(1)};
  }
`;

export const Inner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
