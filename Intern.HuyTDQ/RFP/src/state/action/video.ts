import {
  createRequestType,
  createAction,
  REQUEST,
  SUCCESS,
  FAILURE,
} from './index';

export const MOST_POPULAR = createRequestType('MOST_POPULAR');
export const GET_VIDEO_ID = createRequestType('GET_VIDEO_ID');

export const mostPopular = {
  request: (filter?: any) =>
    createAction(MOST_POPULAR[REQUEST], {
      filter,
    }),
  success: (response: any) => createAction(MOST_POPULAR[SUCCESS], { response }),
  failure: (response: any) => createAction(MOST_POPULAR[FAILURE], { response }),
};

export const getVideoById = {
  get: (videoId: any) => {
    createAction(GET_VIDEO_ID, { videoId });
  },
};
