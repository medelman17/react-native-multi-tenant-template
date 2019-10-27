const initialState = {
  entities: {user: {}, photo: {}},
  result: [],
  isLoading: false,
  error: null,
};

export const unsplashReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UNSPLASH/ERROR':
      return Object.assign({}, state, {isLoading: false, ...action.payload});
    case 'UNSPLASH/LOADING':
      return Object.assign({}, state, {isLoading: true});
    case 'UNSPLASH/SUCCESS':
      return Object.assign({}, state, {isLoading: false, ...action.payload});
    default:
      return state;
  }
};
