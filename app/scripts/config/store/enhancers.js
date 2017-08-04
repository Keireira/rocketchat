import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootSaga from 'sagas';
import devModeCompose from 'config/store/dev';
import composeMiddlewares from 'config/store/composeMiddlewares';

const sagaMiddleware = createSagaMiddleware();
const reactRouterMiddleware = routerMiddleware(history);

const isDev = process.env.NODE_ENV === 'development';

const middlewares = composeMiddlewares([
  sagaMiddleware,
  reactRouterMiddleware,
], isDev);

const composeEnhancers = (isDev) ? devModeCompose : compose;

const enhancers = composeEnhancers(
  applyMiddleware(...middlewares)
);

export const runSagas = () => {
  sagaMiddleware.run(rootSaga);

  return sagaMiddleware;
};

export default enhancers;
