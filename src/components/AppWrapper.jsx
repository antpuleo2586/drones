import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AppWrapper = (props) => {
  const Wrapper = styled.div`    
    width: 700px;
    margin: auto; 
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
