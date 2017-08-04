import { createAction } from 'redux-act';

export const asyncAction = (reduxMessage) => (payload = {}) => ({
  // action.INIT is needed to initiate action
  INIT: createAction(`[INIT] ${reduxMessage}`, payload['INIT']),
  DONE: createAction(`[DONE] ${reduxMessage}`, payload['DONE']),
  NOT_MODIFIED: createAction(`[304] ${reduxMessage}`, payload['NOT_MODIFIED']),
  FAIL: createAction(`[FAIL] ${reduxMessage}`, payload['FAIL']),
});

export const syncAction = (reduxMessage) => (payload = {}) => ({
  // action.START is needed to initiate action
  START: createAction(`[START] ${reduxMessage}`, payload['START']),
  FINISH: createAction(`[FINISH] ${reduxMessage}`, payload['FINISH']),
});

export default {
  asyncAction,
  syncAction,
};
