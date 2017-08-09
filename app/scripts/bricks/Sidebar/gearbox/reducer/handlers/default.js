export const initHandler = (state) => ({
  ...state,
  isFetching: true,
  error: null,
});

export const failHandler = (state, error) => ({
  ...state,
  isFetching: false,
  error,
});

export const notModifiedHandler = (state) => ({
  ...state,
  isFetching: false,
  error: null,
});

export default {
  initHandler,
  failHandler,
  notModifiedHandler,
};
