import { put, takeEvery, all } from "redux-saga/effects";

export function* authChange(action) {
  yield console.log("auth >", action);
  //   yield put({
  //     type: "AUTH/START/CHANGE",
  //     payload: action.payload
  //   });
}

export function* authLogout(action) {
  yield console.log("authLogout", action);
  yield put({
    type: "AUTH/START/LOGOUT",
    payload: action.payload
  });
}

export function* authSignin(action) {
  yield console.log("authSignin", action);
  yield put({
    type: "TOP/TOGGLE/LOADING",
    bool: true
  });
  yield put({
    type: "AUTH/TOGGLE/AUTHING",
    bool: true
  });
}

export function* authUpdate(action) {
  yield put({
    type: "AUTH/UPDATE_CREDENTIALS",
    payload: action.payload
  });
}

export function* watchAuth() {
  yield takeEvery("AUTH/CHANGE", authChange);

  yield takeEvery("AUTH/UPDATE", authUpdate);
  yield takeEvery("AUTH/SIGNIN", authSignin);
  yield takeEvery("AUTH/LOGOUT", authLogout);
}

export default function* authSaga() {
  yield all([watchAuth()]);
}
