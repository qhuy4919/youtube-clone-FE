import { createSelector } from 'reselect';
import { SUCCESS } from '../action';
import { MOST_POPULAR } from '../action/video';

export const initialState = {
  byId: {},
  mostPopular: {},
};

export function videoReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case MOST_POPULAR[SUCCESS]:
      return reduceFetchMostPopularVideo(action.response, state);
    default:
      return state;
  }
}

function reduceFetchMostPopularVideo(response: any, state: any) {
  const videoList = response.items.reduce((acc: any, video: any) => {
    acc[video.id] = video;
    return acc;
  }, {});
  let item = Object.keys(videoList);
  // if (state.mostPopular) {
  //   item = [...state.mostPopular.items, ...item];
  // }

  const mostPopular = {
    totalResults: response.pageInfo.totalResults,
    item,
  };

  return {
    ...state,
    mostPopular,
    byId: { ...state.byId, ...videoList },
  };
}

// selectors

export const getMostPopular = (state: any) => state.video.mostPopular;

export const getMostPopularVideo = createSelector(
  (state: any) => state.video.byId,
  getMostPopular,
  (videoById, mostPopular) => {
    if (!mostPopular.items || !videoById) {
      return ['huhu'];
    }
    return mostPopular.items.map((videoId: any) => videoById[videoId]);
  }
);
