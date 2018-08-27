import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AppTitle = ({ title }) => {
  const Title = styled.h2`
    text-align: center;
  `;

  return <Title>{title}</Title>;
};

AppTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AppTitle;
