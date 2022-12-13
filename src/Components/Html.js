import React from 'react';
import styled from 'styled-components';
import {ReactComponent as CwLogo} from '../assets/cw-logo.svg'
import {ReactComponent as SupermarketLogo} from '../assets/supermarket-logo.svg'

const Holder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #f15e2f;

  p {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
    line-height: 1.1;
    width: 140px;
  }

  a {
    color: inherit;
  }
`;

const Text = styled.p`
  position: absolute;
  margin: 0;
  top: ${props => props.top ? '20px' : 'auto'};
  left: ${props => props.left ? '20px' : 'auto'};
  bottom: ${props => props.bottom ? '20px' : 'auto'};
  right: ${props => props.right ? '20px' : 'auto'};
`;

const Logos = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  a {
    display: block;
    padding: 10px;
    svg {
      height: 40px;
      width: auto;
      path {
        fill: #000;
      }
    }
    &:last-child {
      border-left: 2px solid;
    }
  }
`;

function Html() {
  return (
    <Holder>
      <Text top left>2022 STIRRED UP A LOT OF IDEAS, NEW DIRECTIONS AND UNEXPECTED CONNECTIONS</Text>
      <Text bottom left>FROM EVERYONE AT CW, THANK YOU FOR BEING THERE WITH US. WE LOOK FORWARD TO SHAKING THINGS UP IN 2023.</Text>
      <Logos>
        <a href="https://craigwalker.com.au" target="_blank" rel="noopener noreferrer">
          <CwLogo />
        </a>
        <a href="https://supermarket.london" target="_blank" rel="noopener noreferrer">
          <SupermarketLogo />
        </a>
      </Logos>
    </Holder>
  )
}

export default Html;