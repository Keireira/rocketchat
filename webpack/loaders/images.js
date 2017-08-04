const aliases = require('../aliases');

const imageWebpackConfig = {
  mozjpeg: {
    progressive: true,
  },
  gifsicle: {
    interlaced: false,
  },
  optipng: {
    optimizationLevel: 4,
  },
  pngquant: {
    quality: '75-90',
    speed: 3,
  },
};

const images = [
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    include: aliases.images,
    loaders: [
      'file-loader?digest=hex&name=assets/images/img-[sha512:hash:base64:12].[ext]', {
        loader: 'image-webpack-loader',
        query: imageWebpackConfig
      }
    ]
  },
  {
    test: /\.(svg)$/i,
    include: aliases.img_icons,
    use: [
      'babel-loader',
      'svg-react-loader'
    ]
  }
];

module.exports = images;
