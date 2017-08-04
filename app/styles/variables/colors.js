const colors = {
  black: (opacity = 1) =>
    `rgba(0, 0, 0, ${opacity})`, // #000000

  raisin_black: (opacity = 1) =>
    `rgba(38, 38, 38, ${opacity})`, // #262626

  jet: (opacity = 1) =>
    `rgba(51, 51, 51, ${opacity})`, // #333333

  maximum_red: (opacity = 1) =>
    `rgba(222, 28, 40, ${opacity})`, // #DE1C28

  harlequin_green: (opacity = 1) =>
    `rgba(110, 206, 26, ${opacity})`, // #6ECE1A

  blue_jeans: (opacity = 1) =>
    `rgba(82, 175, 241, ${opacity})`, // #52AFF1

  gainsboro: (opacity = 1) =>
    `rgba(222, 222, 222, ${opacity})`, // #DEDEDE

  platinum: (opacity = 1) =>
    `rgba(228, 228, 228, ${opacity})`, // #E4E4E4

  white_smoke: (opacity = 1) =>
    `rgba(244, 244, 244, ${opacity})`, // #F4F4F4

  snow: (opacity = 1) =>
    `rgba(249, 249, 249, ${opacity})`, // #F9F9F9

  white: (opacity = 1) =>
    `rgba(255, 255, 255, ${opacity})`, // #FFFFFF
};

export default colors;
