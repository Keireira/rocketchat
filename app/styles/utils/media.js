import { css } from 'styled-components';

export const sizes = {
  alpha: 1440,
  beta: 1280,
  gamma: 1024,
  delta: 414,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
