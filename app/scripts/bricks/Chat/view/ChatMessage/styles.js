import styled from 'styled-components';
import { toRem } from 'styles';

export const Name = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.jet(1)};
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.taupe_gray(1)};
`;

export const Message = styled.div`
  text-align: right;
  font-size: ${toRem(14)};
  line-height: ${toRem(20)};
  font-family: 'roboto-regular';

  background-color: ${({ theme }) => theme.white(1)};
  box-shadow: 0 4px 6px 0 ${({ theme }) => theme.black(0.05)};
  border-radius: 5px;
  padding: 15px;
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

  ${({ isClient }) => {
    const margin = (isClient) ? 'margin-right' : 'margin-left';

    return `${margin}: 15px;`
  }}
`;

export default styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: ${({ isClient }) => (isClient) ? 'row' : 'row-reverse'};

  margin-top: 30px;
`;
