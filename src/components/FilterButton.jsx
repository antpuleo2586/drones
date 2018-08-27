import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchAllDrones } from '../state/actions/drones';

const FilterButton = (props) => {
  const Button = styled.button`
    background: white;
    color: blue;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid blue;
    border-radius: 3px;
`;

  return <Button onClick={props.fetchAllDrones}>Filter</Button>;
};

FilterButton.propTypes = {
  fetchAllDrones: PropTypes.func.isRequired,
};

const mapDispatchToState = {
  fetchAllDrones,
};

export default connect(null, mapDispatchToState)(FilterButton);
