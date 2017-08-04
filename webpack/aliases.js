const path = require('path');

module.exports = {
  // Service aliases
    // main
    'app': path.join(__dirname, '../app'),
    'entryPoint': path.join(__dirname, '../app/scripts/main.js'),

    // loaders
    'files': path.join(__dirname, '../app/files'),
    'fonts': path.join(__dirname, '../app/files/fonts'),
    'img_icons': path.join(__dirname, '../app/files/icons'),
    'images': path.join(__dirname, '../app/files/images'),
    'locales': path.join(__dirname, '../app/locales'),
    'scripts': path.join(__dirname, '../app/scripts'),
    'styles': path.join(__dirname, '../app/styles'),

  // Project aliases
    // General
    'api': path.join(__dirname, '../app/scripts/api'),
    'config': path.join(__dirname, '../app/scripts/config'),

    // Utils
    'utils': path.join(__dirname, '../app/scripts/utils'),
    'hoc': path.join(__dirname, '../app/scripts/utils/hoc'),
    'icons': path.join(__dirname, '../app/scripts/utils/icons'),
    'helpers': path.join(__dirname, '../app/scripts/utils/helpers'),

    // Files
    'other': path.join(__dirname, '../app/files/other'),

    // Structure
    'bricks': path.join(__dirname, '../app/scripts/bricks'),
    'pages': path.join(__dirname, '../app/scripts/common/pages'),
    'modules': path.join(__dirname,'../app/scripts/common/modules'),
    'templates': path.join(__dirname, '../app/scripts/common/templates'),

    // Redux
    'sagas'     : path.join(__dirname, '../app/scripts/common/sagas'),
    'actions'   : path.join(__dirname, '../app/scripts/common/actions'),
    'reducers'  : path.join(__dirname, '../app/scripts/common/reducers'),
    'selectors' : path.join(__dirname, '../app/scripts/common/selectors'),
};
