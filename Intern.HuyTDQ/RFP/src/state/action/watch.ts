import {
  createRequestType,
  createAction,
  SUCCESS,
  REQUEST,
  FAILURE,
} from './index';

export const WATCH_DETAIL = createRequestType('WATCH_DETAIL');

export const watchDetail = {
  request: (videoId: string) => {
    createAction(WATCH_DETAIL[REQUEST], { videoId });
  },
  succsess: (response: any) => createAction(WATCH_DETAIL[SUCCESS], response),
};
