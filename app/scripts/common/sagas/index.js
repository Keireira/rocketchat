import { all } from 'redux-saga/effects';

import watchChat from './chat';
import watchusers from './users';
import watchLocale from './locale';
import watchSidebar from 'bricks/Sidebar/gearbox/saga';

export default function* rootSaga() {
  yield all([
    watchChat(),
    watchusers(),
    watchLocale(),
    watchSidebar(),
  ]);
};
