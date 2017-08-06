import styled from 'styled-components';

export const SubText = styled.div`
  display: block;
  width: 100%;
  font-size: .875rem;
  color: ${({ theme }) => theme.spanish_gray(1)};

  white-space: nowrap;
`;

export const SubAccountInfo = styled.div`
  margin-top: 15px;
`;

export const StyledAccountCart = styled.div`
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
