import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'react-router-redux';

import locales from 'locales';
import AppRouter from 'config/routes';

import { Root } from './styles';
import { colors } from 'styles/variables';
import 'styles';

const theme = {
  ...colors,
};

const RootComponent = ({ store, history }) => {
  const supportsHistory = 'pushState' in window.history;

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <Root>
            <Helmet>
              <title>{locales.title}</title>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            </Helmet>

            <AppRouter forceRefresh={!supportsHistory} />
          </Root>
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
};

RootComponent.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

RootComponent.defaultProps = {
  store: {},
  history: {},
};

export default RootComponent;
