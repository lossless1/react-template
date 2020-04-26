const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const STOP = 'STOP';

export const createAction = type => (payload = {}) => ({ type, payload });

export const requestAction = (type, payload = {}) => ({ type, payload });

export const createRequestTypes = base =>
  [REQUEST, SUCCESS, FAILURE, STOP].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});

export const createRequestAction = types => ({
  request: payload => requestAction(types[REQUEST], payload),
  success: payload => requestAction(types[SUCCESS], payload),
  failure: payload => requestAction(types[FAILURE], payload),
  stop: payload => requestAction(types[STOP], payload),
});

export const createFailedHandler = (state, { payload }) => ({
  ...state,
  error: payload instanceof TypeError ? payload.toString() : payload,
  fetching: false,
});

export const createRequestHandlers = (types, handlers = {}) => ({
  [types.REQUEST]: state => ({
    ...state,
    fetching: true,
  }),
  [types.STOP]: state => ({
    ...state,
    fetching: false,
  }),
  [types.FAILURE]: (state, { payload }) =>
    handlers.failedHandler
      ? handlers.failedHandler(state, { payload })
      : {
          ...state,
          error: payload instanceof TypeError ? payload.toString() : payload,
          fetching: false,
        },
  [types.SUCCESS]: (state, { payload }) =>
    handlers.successHandler
      ? handlers.successHandler(state, { payload })
      : {
          ...state,
          error: null,
          fetching: false,
          data: payload,
        },
});

export const createSetValueHandler = types => ({
  [types.SUCCESS]: (state, { payload: { id, value } }) => {
    return {
      ...state,
      data: {
        ...state.data,
        [id]: value,
      },
    };
  },
});

export const createReducer = (initialState, handlers) => (
  state = initialState,
  action
) => {
  if ({}.hasOwnProperty.call(handlers, action.type)) {
    return handlers[action.type](state, action);
  }
  return state;
};
