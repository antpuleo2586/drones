import axios from 'axios';
import { FETCH_ALL_DRONES, SET_RISK_FILTER } from './types';
import Drone from '../../models/Drone';
import { API_URL } from '../../constants/api';
import { getRiskFilter } from '../selectors/drones';

export const fetchAllDrones = () => (dispatch, getState) => dispatch({
  type: FETCH_ALL_DRONES,
  meta: {
    isHttp: true,
  },
  async payload() {
    const riskFilter = getRiskFilter(getState());

    let url = `${API_URL}/drones`;

    if (riskFilter) {
      url = `${url}/risky/${riskFilter}`;
    }
    const { data } = await axios.get(`${url}?time=${new Date().getTime()}`);

    return data.map(element => new Drone(element));
  },
});

export const setRiskFilter = filter => ({
  type: SET_RISK_FILTER,
  payload: filter,
});
