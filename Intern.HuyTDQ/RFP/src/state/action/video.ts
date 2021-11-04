import {
  createRequestType,
  createAction,
  REQUEST,
  SUCCESS,
  FAILURE,
} from './index';

export const MOST_POPULAR = createRequestType('MOST_POPULAR');

export const mostPopular = {
  request: (amount?: any, loadDescription?: any) =>
    createAction(MOST_POPULAR[REQUEST], {
      amount,
      loadDescription,
    }),
  success: (response: any) => createAction(MOST_POPULAR[SUCCESS], { response }),
  failure: (response: any) => createAction(MOST_POPULAR[FAILURE], { response }),
};
