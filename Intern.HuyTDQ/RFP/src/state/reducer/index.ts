import { combineReducers } from 'redux';
import { videoReducer } from './video';
export const rootReducer = combineReducers({
  video: videoReducer,
});
