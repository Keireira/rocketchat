import { keyframes } from 'styled-components';

export const scale = keyframes`
  0% {
    transform: scale(1);
  }

  100% {
    ${'' /* Rotate is hack for IE && FF */}
    transform: scale(1.1) rotate(0.02deg);
  }
`;

export default {
  scale,
};
