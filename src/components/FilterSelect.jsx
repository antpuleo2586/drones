import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getRiskFilter } from '../state/selectors/drones';
import { setRiskFilter } from '../state/actions/drones';

const FilterSelect = (props) => {
  const Select = styled.select`
    background: white;
    color: blue;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid blue;
    border-radius: 3px;
`;

  const {
    riskFilter,
  } = props;

  return (
    <Select onChange={event => props.setRiskFilter(event.target.value)} defaultValue={riskFilter}>
      <option value="">- Select Risk Range- </option>
      <option value="0/10">0-10%</option>
      <option value="10/50">10-50%</option>
      <option value="50/100">50-100%</option>
    </Select>
  );
};

FilterSelect.propTypes = {
  setRiskFilter: PropTypes.func.isRequired,
  riskFilter: PropTypes.string,
};

FilterSelect.defaultProps = {
  riskFilter: null,
};

const mapStateToProps = state => ({
  riskFilter: getRiskFilter(state),
});

const mapDispatchToState = {
  setRiskFilter,
};

export default connect(mapStateToProps, mapDispatchToState)(FilterSelect);
