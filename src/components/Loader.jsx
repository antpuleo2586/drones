import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function () {
  const rotate360 = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

  const Loader = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -40px;
    margin-left: -40px;
    border: 10px solid #F3F3F3;
    border-top: 10px solid blue;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: ${rotate360} 2s linear infinite;
  `;

  return <Loader />;
}
