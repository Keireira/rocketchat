import { injectGlobal } from 'styled-components';

const fonts = {
  roboto: {
    regular: {
      woff2: require('fonts/Roboto/Regular/roboto_regular.woff2'),
      woff: require('fonts/Roboto/Regular/roboto_regular.woff'),
      ttf: require('fonts/Roboto/Regular/roboto_regular.ttf'),
      eot: require('fonts/Roboto/Regular/roboto_regular.eot'),
    },
  },
  SFUIDisplay: {
    regular: {
      woff2: require('fonts/SFUIDisplay/Regular/sfuidisplay_regular.woff2'),
      woff: require('fonts/SFUIDisplay/Regular/sfuidisplay_regular.woff'),
      ttf: require('fonts/SFUIDisplay/Regular/sfuidisplay_regular.ttf'),
      eot: require('fonts/SFUIDisplay/Regular/sfuidisplay_regular.eot'),
    },
  },
};

Object.keys(fonts).forEach((fontFamily) => {
  Object.keys(fonts[fontFamily]).forEach((fontStyle) => {
    const fontName = `${fontFamily}-${fontStyle}`.toLowerCase();

    injectGlobal`
      @font-face {
        font-family: ${fontName};
        src: url(${fonts[fontFamily][fontStyle].eot});
        src:
          url(${fonts[fontFamily][fontStyle].eot}?#iefix) format('embedded-opentype'),
          url(${fonts[fontFamily][fontStyle].woff2}) format('woff2'),
          url(${fonts[fontFamily][fontStyle].woff}) format('woff'),
          url(${fonts[fontFamily][fontStyle].ttf}) format('truetype');
        font-weight: normal;
        font-style: normal;
      }
    `;
  });
});
