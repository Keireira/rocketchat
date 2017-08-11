import { takeLatest, all, put } from 'redux-saga/effects';
import { sendOperationToChat, clearSelectedOperation } from 'actions/chat';

function* sendOperationToChatSaga({ payload }) {
  yield put(sendOperationToChat['FINISH'](payload));
};

function* clearSelectedOperationSaga() {
  yield put(clearSelectedOperation['FINISH']());
};

export default function* watchChat() {
  yield all([
    takeLatest([sendOperationToChat['START']], sendOperationToChatSaga),
    takeLatest([clearSelectedOperation['START']], clearSelectedOperationSaga),
  ]);
};
