export function parseAction(action) {
  if (!action) {
    return;
  }
  const {type} = action;

  const parsedType = type.split('/');
  const isRequest = parsedType[parsedType.length - 1] === 'REQUEST';

  return {
    ...action,
    type,
    namespace: parsedType[0],
    isRequest,
  };
}

export function getConformedPayload(args) {
  const {action} = args;
  const {namespace} = parseAction(action);
  const apiPayloadStrategy = {
    UNSPLASH: action => getUnsplashApiPayload(args),
  };
  return apiPayloadStrategy[namespace](action);
}

export function getUnsplashApiPayload(args) {
  const {action, state} = args;

  // hardcoded values for now, but can do lookup, etc., easily.
  return {
    action: action,
    parsedAction: parseAction(action),
    apiService: {
      state: state,
      options: {
        baseURL: `https://api.unsplash.com`,
      },
    },
    request: {
      url: '/search/users/',
      method: 'GET',
      data: {
        ...action.payload,
        client_id:
          'aa2f3c3be8125f1fc86e3007153420c4e446c19b7b0c6d80a6257b281c9a0dc5',
      },
      label: 'UNSPLASH',
    },
  };
}
