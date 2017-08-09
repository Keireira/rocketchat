import styled from 'styled-components';

export const Progressbar = styled.div`
  overflow: hidden;
  position: relative;

  width: 100%;
  height: 22px;
  margin-top: 8px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.gainsboro(1)};

  &::before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    top: 0;

    border-radius: 24px;
    width: ${({ current }) => `${current}%`};
    background-color: ${({ theme }) => theme.blue_jeans(1)};
  }
`;

export const Summ = styled.span`
  position: absolute;
  display: inline-flex;
  transform: translateY(-50%);
  top: 50%;
  z-index: 2;

  padding: 0 10px;
  line-height: 1rem;
  font-size: .875rem;
  color: ${({ theme }) => theme.jet(1)};

  &:first-child {
    left: 0;
  }

  &:last-child {
    right: 0;
  }
`;
