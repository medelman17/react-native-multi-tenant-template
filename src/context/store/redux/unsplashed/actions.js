import {ApiService} from '../../../../services';
import {normalize, schema} from 'normalizr';
import {parseAction, getConformedPayload} from '../helpers';

export function getData(payload) {
  return async (dispatch, getState) => {
    const state = getState();
    const action = parseAction(payload);
    const {request, apiService} = getConformedPayload({action, state});
    const api = new ApiService(apiService);
    try {
      dispatch(getLoadingAction({payload: {parsedAction: action}}));
      const result = await api.makeRequest(request);
      dispatch(getSuccessAction({payload: {parsedAction: action}, result}));
    } catch (err) {
      console.log(err);
      dispatch(getFailAction({err, payload: {parsedAction: action}}));
    }
  };
}

function getLoadingAction(args) {
  const {payload, err} = args;
  return {
    type: `${payload.parsedAction.namespace}/LOADING`,
    error: err,
    meta: {
      prevAction: payload.action,
    },
  };
}

function getFailAction(args) {
  const {payload, err} = args;
  return {
    type: `${payload.parsedAction.namespace}/ERROR`,
    error: err,
    meta: {
      prevAction: payload.action,
    },
  };
}

function getSuccessAction(args) {
  const {payload, result} = args;

  return {
    type: `${payload.parsedAction.namespace}/SUCCESS`,
    payload: normalize(result.results, [userSchema]),
    meta: {
      prevAction: payload.action,
    },
  };
}

const userSchema = new schema.Entity('user');
const photoSchema = new schema.Entity('photo');
const photosSchema = new schema.Array(photoSchema);
userSchema.define({photos: photosSchema});
