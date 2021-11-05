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
  const videoList = response.reduce((acc: any, video: any) => {
    acc[video.id] = video;
    return acc;
  }, {});
  let item = Object.keys(videoList);

  // if (Object.keys(state.mostPopular).length) {
  //   item = [...state.mostPopular.item, ...item];
  // }
  const mostPopular = {
    item,
  };

  return {
    ...state,
    mostPopular,
    byId: { ...state.byId, ...videoList },
  };
}

// selector
export const getMostPopularVideo = createSelector(
  (state: any) => state.video.byId,
  (state: any) => state.video.mostPopular,
  (videoById, mostPopular) => {
    if (!mostPopular.item) {
      return ['huhu'];
    }
    return mostPopular.item.map((videoId: any) => videoById[videoId]);
  }
);
