import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';

import Root from 'config/Root';
import configureStore from 'config/store';
import locales from 'locales';

const initialState = {
  locale: {
    currentLocale: 'ru',
  },
};

const history = createHistory();
const store = configureStore(initialState);
locales.setLanguage(initialState.locale.currentLocale);

DOMRender();

if (module.hot) {
  module.hot.accept('config/Root', () => {
    DOMRender();
  });
}

function DOMRender() {
  ReactDOM.render(
    <AppContainer>
      <Root store={store} history={history} />
    </AppContainer>,
    document.querySelector('#app')
  );
};