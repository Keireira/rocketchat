import { createLogger } from 'redux-logger';

const composeMiddlewares = (middlewares, isDev) => {
  const loggerMiddleware = (isDev) ? createLogger({
    collapsed: true,
  }) : undefined;

  const potentionalMiddlewares = [
    loggerMiddleware,
    ...middlewares,
  ];

  return potentionalMiddlewares.filter((item) => item);
};

export default composeMiddlewares;
