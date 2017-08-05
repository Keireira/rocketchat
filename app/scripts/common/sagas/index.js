import { all } from 'redux-saga/effects';

import watchLocale from './locale';
import watchSidebar from 'bricks/Sidebar/gearbox/saga';

export default function* rootSaga() {
  yield all([
    watchLocale(),
    watchSidebar(),
  ]);
};
