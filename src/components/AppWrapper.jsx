import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AppWrapper = (props) => {
  const Wrapper = styled.div`    
    width: 100%;
    margin: auto; 
    text-align: center;
  `;

  return <Wrapper>{props.children}</Wrapper>;
};

AppWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AppWrapper;
