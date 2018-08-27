import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import droneImage from '../assets/drone.jpg';
import Drone from '../models/Drone';

const DroneComponent = ({ drone }) => {
  const Box = styled.div`
    border: 1px blue solid;
    width: 200px;
    margin: 0 auto 10px;
    display: block;
    padding: 10px;
   `;

  const Image = styled.img`
    text-align: center;
    width: 50px;
    height: 50px;
    display: block;
    margin: 0 auto;
  `;

  const Text = styled.p`
    text-align: left;
  `;

  return (
    <Box>
      <Image src={droneImage} />
      <Text><b>Name:</b> {drone.name}</Text>
      <Text><b>Flights:</b> {drone.numFlights}</Text>
      <Text><b>Crashes:</b> {drone.numCrashes}</Text>
      <Text><b>Price:</b> {drone.price} {drone.currency}</Text>
    </Box>
  );
};

DroneComponent.propTypes = {
  drone: PropTypes.instanceOf(Drone).isRequired,
};

export default DroneComponent;
