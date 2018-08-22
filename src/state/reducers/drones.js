import { FETCH_ALL_DRONES_FULFILLED } from '../actions/types';

const initialState = {
  selected: null,
  all: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_DRONES_FULFILLED:
      return {
        ...state,
        all: action.payload,
      };
    default:
      return state;
  }
};
