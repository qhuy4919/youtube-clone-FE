import { fork, take, takeEvery, call, all, put } from 'redux-saga/effects';
import * as videoAction from '../action/video';
import { REQUEST } from '../action';
import { Query } from '../../access/api/index';
import { fetchEntity } from './index';

//worker
export function* fetchMostPopularVideo(
  amount: any,
  loadDescription: any,
  nextPageToken: any
) {
  const request = Query.video.list(null);
  yield fetchEntity(request, videoAction.mostPopular);
}


//wathcer
export function* watchMostPopularVideo() {
  while (true) {
    const { amount, loadDescription, nextPageToken } = yield take(
      videoAction.MOST_POPULAR[REQUEST]
    );
    yield fork(fetchMostPopularVideo, amount, loadDescription, nextPageToken);
  }
}
