import { createSelector } from 'reselect';
import { FAILURE, REQUEST, SUCCESS } from '../action';
import { GET_VIDEO_ID, MOST_POPULAR, CREATE_NEW_VIDEO } from '../action/video';
import { WATCH_DETAIL, WATCH_UPDATE } from '../action/watch';

export const initialState = {
  byId: {},
  mostPopular: {},
  totalPage: -1,
  currentVideo: {},
  isLoading: true,
  hasError: null,
};

export function videoReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case MOST_POPULAR[SUCCESS]:
      return fetchMostPopularVideo(action.response, state);
    case MOST_POPULAR[REQUEST]:
      return resetLoadingState(state);
    case MOST_POPULAR[FAILURE]:
      return handleErrorResponse(action.response, state);
    //
    case WATCH_DETAIL[SUCCESS]:
      return fetchVideoDetail(action.response, state);
    case WATCH_DETAIL[REQUEST]:
      return resetLoadingState(state);
    case WATCH_DETAIL[FAILURE]:
      return handleErrorResponse(action.response, state);
    //
    case WATCH_UPDATE[SUCCESS]:
      return fetchVideoDetail(action.response, state);
    case WATCH_UPDATE[REQUEST]:
      return resetLoadingState(state);
    case WATCH_UPDATE[FAILURE]:
      return handleErrorResponse(action.response, state);
    //
    case CREATE_NEW_VIDEO[REQUEST]:
      return resetLoadingState(state);
    case CREATE_NEW_VIDEO[SUCCESS]:
      return updateVideoList(action.response, state);
    case CREATE_NEW_VIDEO[FAILURE]:
      return handleErrorResponse(action.response, state);
    //
    case GET_VIDEO_ID:
      return filterVideoById(action.videoId, state);
    //
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

  const mostPopular = {
    item,
  };

  const totalPage = response.headers['x-total-count'];

  return {
    ...state,
    mostPopular,
    byId: { ...state.byId, ...videoList },
    totalPage: totalPage,
    isLoading: false,
    hasError: null,
  };
}

function fetchVideoDetail(response: any, state: any) {
  return {
    ...state,
    byId: {},
    mostPopular: {},
    currentVideo: { ...state.currentVideo, ...response.data },
    isLoading: false,
    hasError: null,
  };
}

function filterVideoById(videoId: any, state: any) {
  return {
    ...state,
    currentVideo: state.byId[videoId],
    isLoading: false,
    hasError: null,
  };
}

function updateVideoList(response: any, state: any) {
  const newVideoId = response.data.id;
  const newVideoDetail = response.data.snippet;
  const newVideo = { [newVideoId]: newVideoDetail };

  return {
    ...state,
    byId: { ...state.byId, newVideo },
    mostPopular: { ...state.mostPopular.item, newVideoId },
    currentVideo: { ...state.currentVideo, newVideo },
    isLoading: false,
    hasError: null,
  };
}

function resetLoadingState(state: any) {
  return {
    ...state,
    isLoading: true,
  };
}

function handleErrorResponse(response: any, state: any) {
  return {
    ...state,
    hasError: JSON.stringify(response.data) || 'not found',
  };
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

export const getLoading = createSelector(
  (state: any) => state.video.isLoading,
  (isLoading) => {
    return isLoading;
  }
);

export const getError = createSelector(
  (state: any) => state.video.hasError,
  (hasError) => {
    return hasError;
  }
);
