import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DroneComponent from './DroneComponent';
import Drone from '../models/Drone';

const Drones = ({ drones }) => {
  const DronesWrap = styled.div`
    display: -webkit-flex; /* Safari */
      -webkit-flex-wrap: wrap; /* Safari 6.1+ */
      display: flex;
      flex-wrap: wrap;
  `;

  return (
    <DronesWrap>
      {
      drones.map(
        drone => (<DroneComponent key={drone.droneId} drone={drone} />),
      )
  }
    </DronesWrap>
  );
};

Drones.propTypes = {
  drones: PropTypes.arrayOf(PropTypes.instanceOf(Drone)).isRequired,
};

export default Drones;
