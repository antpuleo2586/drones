const initialState = false;

export default (state = initialState, action) => {
  if (action.type.endsWith('_FULFILLED') || action.type.endsWith('_UNFULFILLED')) {
    return false;
  }

  if (action.type.endsWith('_PENDING')) {
    return true;
  }

  return state;
};
