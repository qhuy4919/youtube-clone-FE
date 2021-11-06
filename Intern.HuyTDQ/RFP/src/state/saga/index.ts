import { all, put, fork } from 'redux-saga/effects';
import { watchMostPopularVideo } from './video';

export default function* () {
  yield all([fork(watchMostPopularVideo)]);
}

export type ResponseGenerator = {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
  result?: any;
};
export function* fetchEntity(
  request: any,
  param: any,
  entity: any,
  ...args: any
) {
  try {
    const response: ResponseGenerator = yield request(param);
    yield put(entity.success(response, ...args));
  } catch (error) {
    yield put(entity.failue(error, ...args));
  }
}
