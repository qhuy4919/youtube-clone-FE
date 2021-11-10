import { createSelector } from 'reselect';
import { SUCCESS, REQUEST } from '../action';
import { GET_VIDEO_ID, MOST_POPULAR } from '../action/video';
import { WATCH_DETAIL } from '../action/watch';

export const initialState = {
  byId: {},
  mostPopular: {},
  totalPage: -1,
  currentVideo: {},
  isLoading: true,
};

export function videoReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case MOST_POPULAR[SUCCESS]:
      return fetchMostPopularVideo(action.response, state);
    // case WATCH_DETAIL[SUCCESS]:
    //   return fetchVideoDetail(action.response, state);
    case GET_VIDEO_ID:
      return filterVideoById(action.videoId, state);
    default:
      return state;
  }
}

function fetchMostPopularVideo(response: any, state: any) {
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

export function filterVideoById(videoId: any, state: any) {
  return { ...state, currentVideo: state.byId[videoId] };
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

export const getVideoById = createSelector(
  (state: any) => state.video.currentVideo,
  (videoById) => {
    if (videoById) {
      return videoById;
    }
    return null;
  }
);
