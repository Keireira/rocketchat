const colors = require('colors/safe');

const colorizeString = ({ lText, rText = null, color = 'green' }) => {
  const key = (text) => colors.green.bgBlack.bold(text);
  const value = (text) => colors.yellow.bgBlack.bold(text);

  return (rText)
    ? `${key(lText)} ${value(rText)}`
    : `${colors[color].bgBlack.bold(lText)}`;
};

module.exports = colorizeString;
