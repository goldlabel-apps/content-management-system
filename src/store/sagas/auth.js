import { put, takeEvery, all } from "redux-saga/effects";
import firebase from "firebase/app";

export function* authChange(action) {
  // yield console.log("auth >", action);
  yield put({
    type: "AUTH/SAVE/USER",
    user: action.user
  });
}

export function* authLogout(action) {
  // yield console.log("authLogout", action);
  firebase.auth().signOut();
  yield put({
    type: "AUTH/DO/LOGOUT"
  });
}

export function* watchAuth() {
  yield takeEvery("AUTH/CHANGE", authChange);
  yield takeEvery("AUTH/LOGOUT", authLogout);
}

export default function* authSaga() {
  yield all([watchAuth()]);
}
