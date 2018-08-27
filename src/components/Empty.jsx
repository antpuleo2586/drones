import React from 'react';
import styled from 'styled-components';

export default function () {
  const Empty = styled.h2`
    color: red;
    text-align: center;
  `;

  return <Empty>These aren't the drones you're looking for... Please try again.</Empty>;
}
