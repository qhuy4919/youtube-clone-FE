import { all, put, fork, call } from 'redux-saga/effects';
import { watchMostPopularVideo } from './video';
import { watchVideoDetail } from './watch';

export default function* () {
  yield all([fork(watchMostPopularVideo), fork(watchVideoDetail)]);
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
    yield put(entity.failure(error, ...args));
  }
}
