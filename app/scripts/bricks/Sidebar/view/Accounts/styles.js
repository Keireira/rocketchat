import styled from 'styled-components';

export const CartIcon = styled.a`
  display: flex;

  position: absolute;
  right: -5px;
  top: -5px;

  transition: all .15s ease-in-out;
  border: 1px solid transparent;
  padding: 4px;

  &:hover {
    cursor: pointer;
    border-color: ${({ theme }) => theme.spanish_gray(1)};
    background-color: ${({ theme }) => theme.white(1)};
  }
`;

export const AccountBalance = styled.span`
  display: flex;

  font-size: 1.5rem;
  margin-top: .8rem;
`;

export const AccountNumber = styled.span`
  display: flex;

  font-size: 1.25rem;
`;

export const MainAccountInfo = styled.div`
  position: relative;
  color: ${({ theme }) => theme.jet(1)};
`;

export const NegativeVal = styled.div`
  color: ${({ theme }) => theme.maximum_red(1)};

  &::before {
    content: '- ';
  }
`;

export const PositiveVal = styled.div`
  color: ${({ theme }) => theme.harlequin_green(1)};

  &::before {
    content: '+ ';
  }
`;

export const SubText = styled.span`
  display: flex;

  font-size: .875rem;
  color: ${({ theme }) => theme.spanish_gray(1)};

  white-space: nowrap;
`;

export const SubAccountInfo = styled.div`
  margin-top: 15px;
`;

export const AccountCart = styled.div`
  display: flex;
  flex-direction: column;

  font-family: 'roboto-regular';
  line-height: 1.25rem;

  transition: all .25s ease-in-out;
  padding: 2rem 2.5rem;

  &:hover {
    cursor: default;
    background-color: ${({ theme }) => theme.snow(1)};
  }
`;

export const StyledAccounts = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
