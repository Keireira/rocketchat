import styled from 'styled-components';

export const SubText = styled.span`
  display: flex;

  font-size: .875rem;
  color: ${({ theme }) => theme.spanish_gray(1)};

  white-space: nowrap;
`;

export const SubAccountInfo = styled.div`
  margin-top: 15px;
`;

export const StyledAccountCart = styled.div`
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
