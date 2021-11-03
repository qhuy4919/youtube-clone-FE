import {
  createRequestType,
  createAction,
  REQUEST,
  SUCCESS,
  FAILURE,
} from './index';

export const MOST_POPULAR = createRequestType('MOST_POPULAR');

export const mostPopular = {
  request: (amount: any, loadDescription: any, nextPageToken: any) =>
    createAction(MOST_POPULAR[REQUEST], {
      amount,
      loadDescription,
      nextPageToken,
    }),
  sucess: (response: any) => createAction(MOST_POPULAR[SUCCESS], { response }),
  failue: (response: any) => createAction(MOST_POPULAR[FAILURE], { response }),
};
