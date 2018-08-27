import { FETCH_ALL_DRONES_FULFILLED, SET_RISK_FILTER } from '../actions/types';

const initialState = {
  selected: null,
  all: [],
  riskFilter: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_DRONES_FULFILLED:
      return {
        ...state,
        all: action.payload,
      };
    case SET_RISK_FILTER:
      return {
        ...state,
        riskFilter: action.payload,
      };
    default:
      return state;
  }
};
