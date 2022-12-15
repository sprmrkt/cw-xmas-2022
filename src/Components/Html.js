import React from 'react';
import styled from 'styled-components';
import {ReactComponent as CwLogo} from '../assets/cw-logo.svg'
import {ReactComponent as SupermarketLogo} from '../assets/supermarket-logo.svg'

const Holder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  p {
    text-transform: uppercase;
    font-weight: 800;
    font-size: 20px;
    line-height: 1.1;
    font-family: 'Karla', sans-serif;
  }
  a {
    color: inherit;
  }
  .orientationRequestButton {
    font-size: 20px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
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
  z-index: 100;
  a {
    display: block;
    padding: 10px;
    svg {
      height: 50px;
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

function Html(props) {
  return (
    <Holder>
      <Text top left>2022 STIRRED <br/>UP A LOT OF <br/>IDEAS, NEW <br/>DIRECTIONS AND <br/>UNEXPECTED <br/>CONNECTIONS</Text>
      <Text bottom left>FROM EVERYONE AT <br/>CW & Supermarket, <br/>THANK YOU FOR <br/>BEING THERE <br/>WITH US. WE <br/>LOOK FORWARD <br/>TO SHAKING <br/>THINGS UP IN 2023.</Text>
      <Logos>
        <a href="https://craigwalker.com.au" target="_blank" rel="noopener noreferrer">
          <CwLogo />
        </a>
        <a href="https://supermarket.london" target="_blank" rel="noopener noreferrer">
          <SupermarketLogo />
        </a>
      </Logos>
      {props.orientation && <Text bottom right>{props.orientation.gamma}, {props.orientation.beta}</Text>}
    </Holder>
  )
}

export default Html;