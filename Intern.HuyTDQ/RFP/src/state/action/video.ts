import { createRequestType, createAction, REQUEST, SUCCESS, FAILURE } from './index';

//async action
export const MOST_POPULAR = createRequestType('MOST_POPULAR');
export const CREATE_NEW_VIDEO = createRequestType('CREATE_NEW_VIDEO');
//sync action
export const GET_VIDEO_ID = 'GET_VIDEO_ID';

//
export const mostPopular = {
  request: (filter?: any) =>
    createAction(MOST_POPULAR[REQUEST], {
      filter,
    }),
  success: (response: any) => createAction(MOST_POPULAR[SUCCESS], { response }),
  failure: (response: any) => createAction(MOST_POPULAR[FAILURE], { response }),
};

export const getVideoById = {
  request: (videoId: any) => createAction(GET_VIDEO_ID, { videoId }),
};

export const createNewVideo = {
  request: (data: any) => createAction(CREATE_NEW_VIDEO[REQUEST], { data }),
  success: (response: any) => createAction(CREATE_NEW_VIDEO[SUCCESS], { response }),
  failure: (response: any) => createAction(CREATE_NEW_VIDEO[FAILURE], { response }),
};
