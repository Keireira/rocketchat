import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';

import Root from 'config/Root';
import configureStore from 'config/store';
import locales from 'locales';
import { getLastClient } from 'helpers';

const initialState = {
  locale: {
    currentLocale: 'ru',
  },
  users: {
    lastClient: getLastClient(),
    operator: {
      id: 9999,
      isClient: false,
      displayName: 'Алёна',
      avatarUrl: 'https://randomuser.me/api/portraits/women/95.jpg',
    },
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
