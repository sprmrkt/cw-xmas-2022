import React from 'react';
import styled from 'styled-components';
import {ReactComponent as CwLogo} from '../assets/cw-logo.svg'
import {ReactComponent as SupermarketLogo} from '../assets/supermarket-logo.svg'

const Holder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--windowHeight);

  p {
    text-transform: uppercase;
    font-weight: 800;
    font-size: 16px;
    line-height: 1.1;
    @media( min-width: 768px ) {
      font-size: 20px;
    }
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

const Logo = styled.div`
  position: absolute;
  top: ${props => props.top ? '20px' : 'auto'};
  left: ${props => props.left ? '20px' : 'auto'};
  bottom: ${props => props.bottom ? '20px' : 'auto'};
  right: ${props => props.right ? '20px' : 'auto'};
  z-index: 100;
  a {
    display: block;
    svg {
      height: 50px;
      width: auto;

      path {
        fill: #000;
      }
    }
  }
`;

function Html() {
  return (
    <Holder>
      <Text top left>2022 STIRRED <br />UP A LOT OF <br />IDEAS, NEW <br />DIRECTIONS AND <br />UNEXPECTED <br />CONNECTIONS</Text>
      <Text bottom left>FROM EVERYONE AT <br />CRAIG WALKER <br/>& Supermarket, <br />THANK YOU FOR <br />BEING THERE <br />WITH US.
        WE <br />LOOK FORWARD <br />TO SHAKING <br />THINGS UP IN 2023.</Text>
      <Logo top right>
        <a href="https://craigwalker.com.au" target="_blank" rel="noopener noreferrer"><CwLogo /></a>
      </Logo>
      <Logo bottom right>
        <a href="https://supermarket.london" target="_blank" rel="noopener noreferrer"><SupermarketLogo /></a>
      </Logo>
    </Holder>
  )
}

export default Html;