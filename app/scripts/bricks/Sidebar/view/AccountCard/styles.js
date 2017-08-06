import styled from 'styled-components';

export const SubText = styled.div`
  width: 100%;
  display: block;

  font-size: .875rem;
  white-space: nowrap;
  color: ${({ theme }) => theme.spanish_gray(1)};
`;

export const SubAccountInfo = styled.div`
  margin-top: 15px;
`;

export const StyledAccountCard = styled.div`
  width: 100%;

  font-family: 'roboto-regular';
  line-height: 1.25rem;

  transition: all .25s ease-in-out;
  padding: 2rem 2.5rem;

  &:hover {
    cursor: default;
    background-color: ${({ theme }) => theme.snow(1)};
  }
`;
