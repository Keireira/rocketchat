import styled from 'styled-components';
import { toRem } from 'styles';

export const Negative = styled.span`
  flex-grow: 1;
  text-align: right;
  white-space: nowrap;
  color: ${({ theme }) => theme.maximum_red(1)};

  &::before {
    content: '- ';
    margin-left: .5rem;
  }
`;

export const Positive = styled.span`
  flex-grow: 1;
  text-align: right;
  white-space: nowrap;
  color: ${({ theme }) => theme.harlequin_green(1)};

  &::before {
    content: '+ ';
    margin-left: .5rem;
  }
`;

export const HiddenNums = styled.span`
  & > sup {
    font-size: 1rem;
    margin: -.1rem 0 0 .2rem;
  }
`;

export const TxOperation = styled.div`
  display: flex;
  color: ${({ theme }) => theme.raisin_black(1)};
`;

export const TxTitle = styled.span`
  font-size: ${toRem(16)};
  color: ${({ theme }) => theme.raisin_black(1)};

  margin-bottom: 8px;
`;

export const Avatar = styled.div`
  display: block;
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ url }) => `url(${url})`};

  margin-left: 15px;
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-size: ${toRem(14)};
  line-height: ${toRem(20)};
  font-family: 'roboto-regular';
  color: ${({ theme }) => theme.spanish_gray(1)};

  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.blue_jeans(1)};

  background-color: ${({ theme }) => theme.white(1)};
  box-shadow: 0 4px 6px 0 ${({ theme }) => theme.black(0.05)};
  padding: 15px;
`;

export default styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  margin-top: 30px;
`;
