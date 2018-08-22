import axios from 'axios';
import { FETCH_ALL_DRONES } from './types';
import Drone from '../../models/Drone';

export const fetchAllDrones = () => ({
  type: FETCH_ALL_DRONES,
  async payload() {
    const { data } = await axios.get('/drones/');

    return data.map(element => new Drone(element));
  },
});
