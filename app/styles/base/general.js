import { injectGlobal } from 'styled-components';
import { rem } from 'styles';

injectGlobal`
  html {
    height: 100%;
    width: 100%;
    font-size: ${rem}px;
  }

  body {
    width: 100%;
    height: 100%;
  }
`;
