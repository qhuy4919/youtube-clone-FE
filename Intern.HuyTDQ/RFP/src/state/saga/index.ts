import { all, call, put, fork } from 'redux-saga/effects';
import { watchMostPopularVideo } from './video';

export default function* () {
  yield all([fork(watchMostPopularVideo)]);
}

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
  result?: any;
}
export function* fetchEntity(request: any, enity: any, ...arg: any) {
  try {
    const response: ResponseGenerator = yield call(request);
    yield put(enity.success(response.result, ...arg));
  } catch (error) {
    yield put(enity.failure(error, ...arg));
  }
}
