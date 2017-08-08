import styled from 'styled-components';
import { media } from 'styles/utils';
import { toRem } from 'styles';

export const Textfield = styled.textarea`
  font-size: ${toRem(14)};
  line-height: ${toRem(16)};
  font-family: 'roboto-regular';
  color: ${({ theme }) => theme.jet(1)};

  border-radius: ${toRem(4)};
  border: 1px solid ${({ theme }) => theme.gainsboro(1)};

  margin: ${toRem(10)} 0;
  padding: ${`${toRem(14)} ${toRem(17)}`};

  width: 100%;
  height: ${toRem(120)};
`;

export const Button = styled.button.attrs({
  type: 'submit',
})`
  font-size: ${toRem(12)};
  line-height: ${toRem(14)};
  font-family: 'roboto-regular';
  color: ${({ theme }) => theme.white(1)};

  display: inline-flex;
  border: none;

  border-radius: ${toRem(4)};
  background-color: ${({ theme }) => theme.blue_jeans(.8)};

  transition: all .25s ease-in-out;
  padding: ${`${toRem(10)} ${toRem(15)}`};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.blue_jeans(1)};
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Caption = styled.div`
  font-size: ${toRem(30)};
  line-height: ${toRem(35)};
  font-family: 'roboto-regular';
  color: ${({ theme }) => theme.jet(1)};
`;

export const StyledChatField = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  max-height: ${toRem(322)};

  padding-top: ${toRem(62)};
  padding-left: ${toRem(100)};
  padding-right: ${toRem(100)};
  padding-bottom: ${toRem(48)};

  ${media.beta`
    padding-top: ${toRem(50)};
  `}

  ${media.gamma`
    padding-left: ${toRem(50)};
    padding-right: ${toRem(50)};
    padding-bottom: ${toRem(48)};
  `}
`;
