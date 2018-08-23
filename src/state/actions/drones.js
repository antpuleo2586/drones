import axios from 'axios';
import { FETCH_ALL_DRONES } from './types';
import Drone from '../../models/Drone';
import { API_URL } from '../../constants/api';

export const fetchAllDrones = () => ({
  type: FETCH_ALL_DRONES,
  meta: {
    isHttp: true,
  },
  async payload() {
    const { data } = await axios.get(`${API_URL}/drones`);

    return data.map(element => new Drone(element));
  },
});
