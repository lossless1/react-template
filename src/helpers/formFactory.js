import {
  createAction,
  createRequestAction,
  createRequestTypes,
  createReducer,
  createRequestHandlers,
} from 'helpers/reduxHelpers';

const FormFactory = (NAME, initState) => {
  const types = {
    GET: createRequestTypes(`${NAME}_GET`),
    SET: `${NAME}_SET`,
    RESET: `${NAME}_RESET`,
  };
  const actions = {
    get: createRequestAction(types.GET),
    set: createAction(types.SET),
    reset: createAction(types.RESET),
  };
  const handlers = {
    ...createRequestHandlers(types.GET),
    [types.SET]: (state, { payload }) => ({
      ...state,
      data: { ...state.data, ...payload },
    }),
    [types.RESET]: state => ({ ...state, data: initState.data }),
  };
  const reducer = createReducer(initState, handlers);
  return {
    types,
    actions,
    reducer,
    NAME,
  };
};

export default FormFactory;
