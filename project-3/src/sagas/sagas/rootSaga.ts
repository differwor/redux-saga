import { all, fork } from "redux-saga/effects";
import TodosSaga from "./todosSaga";

export default function* RootSaga() {
  yield all([fork(TodosSaga)]);
}