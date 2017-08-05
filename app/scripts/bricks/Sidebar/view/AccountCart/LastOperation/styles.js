import styled from 'styled-components';

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
