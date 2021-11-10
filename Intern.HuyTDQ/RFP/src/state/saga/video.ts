import { fork, take, select } from 'redux-saga/effects';
import * as videoAction from '../action/video';
import { REQUEST } from '../action';
import { Query } from '../../access/api/index';
import { fetchEntity } from './index';

//worker
export function* fetchMostPopularVideo(filter?: any) {
  const request = Query.trending.list;
  const param = filter;
  yield fetchEntity(request, param, videoAction.mostPopular);
}

//watchcer
export function* watchMostPopularVideo() {
  while (true) {
    const { filter } = yield take(videoAction.MOST_POPULAR[REQUEST]);
    yield fork(fetchMostPopularVideo, filter);
  }
}
