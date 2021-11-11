import { fork, take } from 'redux-saga/effects';
import * as watchAction from '../action/watch';
import { REQUEST } from '../action';
import { Query } from '../../access/api/query-api';
import { fetchEntity } from './index';
//worker
export function* fetchVideoDetail(videoId: string) {
  const request = Query.video.item;
  const param = videoId;
  yield fetchEntity(request, param, watchAction.watchDetail);
}

//wathcer

export function* watchVideoDetail() {
  while (true) {
    const { videoId } = yield take(watchAction.WATCH_DETAIL[REQUEST]);
    yield fork(fetchVideoDetail, videoId);
  }
}
