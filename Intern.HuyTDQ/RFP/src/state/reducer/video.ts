import { createSelector } from 'reselect';
import { SUCCESS } from '../action';
import { MOST_POPULAR, GET_VIDEO_ID } from '../action/video';

export const initialState = {
  byId: {},
  mostPopular: {},
  totalPage: -1,
};

export function videoReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case MOST_POPULAR[SUCCESS]:
      return reduceFetchMostPopularVideo(action.response, state);
    case GET_VIDEO_ID['get']:
      return filterVideoById(state, action.payload);
    default:
      return state;
  }
}

function reduceFetchMostPopularVideo(response: any, state: any) {
  const videoList = response.data.reduce((acc: any, video: any) => {
    acc[video.id] = video;
    return acc;
  }, {});
  const item = Object.keys(videoList);

  // if (Object.keys(state.mostPopular).length) {
  //   item = [...state.mostPopular.item, ...item];
  // }
  const mostPopular = {
    item,
  };

  const totalPage = response.headers['x-total-count'];

  return {
    ...state,
    mostPopular,
    byId: { ...state.byId, ...videoList },
    totalPage: totalPage,
  };
}

export function filterVideoById(state: any, videoId: any) {
  return state.video.byId[videoId];
}

// selector
export const getMostPopularVideo = createSelector(
  (state: any) => state.video.byId,
  (state: any) => state.video.mostPopular,
  (state: any) => state.video.totalPage,
  (videoById, mostPopular, totalPage) => {
    if (!mostPopular.item) {
      return {
        data: [],
        totalPage: 50,
      };
    }
    return {
      data: mostPopular.item.map((videoId: any) => videoById[videoId]),
      totalPage: parseInt(totalPage),
    };
  }
);
