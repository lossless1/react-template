import {
  createRequestAction,
  createRequestTypes,
  createReducer,
  createRequestHandlers,
} from 'helpers/reduxHelpers';

export const NAME = 'test';

const initialState = {
  insideTest: {
    fetching: false,
    data: {},
  },
};

export const types = {
  TEST: createRequestTypes(`${NAME}_TEST`),
};

export const actions = {
  test: createRequestAction(types.TEST),
};

export const handlers = {
  ...createRequestHandlers(types.TEST),
  // ...createRequestHandlers(types.TEST, {
  //   successHandler(state, { payload }) {
  //     return {
  //       ...state,
  //       fetching: false,
  //       data: payload,
  //     };
  //   },
  // }),
  // [types.TEST]: (state, { payload }) => ({
  //   ...state,
  //   data: payload,
  // }),
};

export default createReducer(initialState, handlers);
