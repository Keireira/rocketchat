import styled from 'styled-components';

export const Negative = styled.div`
  display: inline-block;
  color: ${({ theme }) => theme.maximum_red(1)};

  &::before {
    content: '- ';
  }
`;

export const Positive = styled.div`
  display: inline-block;
  color: ${({ theme }) => theme.harlequin_green(1)};

  &::before {
    content: '+ ';
  }
`;
