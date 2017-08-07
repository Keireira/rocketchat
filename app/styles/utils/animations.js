import { keyframes } from 'styled-components';

export const scale = keyframes`
  0% {
    transform: scale(1);
  }

  100% {
    ${'' /* Rotate is hack for IE && FF */}
    transform: scale(1.025) rotate(0.02deg);
  }
`;

export const trambling = keyframes`
  0%, 50%, 100% {
    transform: rotate(0deg);
  }

  10%, 30% {
    transform: rotate(-10deg);
  }

  20%, 40% {
    transform: rotate(10deg);
  }
`;


export default {
  scale,
  trambling,
};
