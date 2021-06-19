import { all } from "redux-saga/effects"

export const namespace = "example";

export function reducer(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export const sagas = function* () {
  yield all([
    // put your sagas here
  ]);
};
