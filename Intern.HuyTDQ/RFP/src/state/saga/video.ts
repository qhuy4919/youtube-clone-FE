import { fork, take } from 'redux-saga/effects';
import * as videoAction from '../action/video';
import { REQUEST } from '../action';
import { Query } from '../../access/api/index';
import { Command } from '../../access/api/command-api';
import { fetchEntity } from './index';

//worker
export function* fetchMostPopularVideo(filter?: any) {
  const request = Query.trending.list;
  const param = filter;
  yield fetchEntity(request, param, videoAction.mostPopular);
}

export function* postNewVideo(data: any) {
  const request = Command.trending.add;
  const param = data;
  yield fetchEntity(request, param, videoAction.createNewVideo);
}

//watchcer
export function* watchMostPopularVideo() {
  while (true) {
    const { filter } = yield take(videoAction.MOST_POPULAR[REQUEST]);
    yield fork(fetchMostPopularVideo, filter);
  }
}

export function* watchCreateNewVideo() {
  while (true) {
    const { data } = yield take(videoAction.CREATE_NEW_VIDEO[REQUEST]);
    yield fork(postNewVideo, data);
  }
}
