import { routerReducer } from 'react-router-redux';
import { createStore, combineReducers } from 'redux';

import rootReducer from 'reducers';
import enhancers, { runSagas } from './enhancers';

export default function configureStore(initialState) {
  const store = createStore(
    combineReducers({
      ...rootReducer,
      router: routerReducer,
    }),
    initialState,
    enhancers
  );

  runSagas();

  if (module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept('reducers', () => {
      const nextRootReducer = require('reducers').default;

      store.replaceReducer(combineReducers({
        ...nextRootReducer,
        router: routerReducer,
      }));
    });
  }

  return store;
};
