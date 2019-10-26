export function locationReducer(state, action) {
  switch (action.type) {
    case 'LOCATION/REQUESTED':
      return {isLoading: true};
    case 'LOCATION/SUCCESS':
      return {isLoading: false, ...action.payload};
    case 'LOCATION/FAIL':
      return {isLoading: false, error: action.payload};
    default:
      return state;
  }
}
