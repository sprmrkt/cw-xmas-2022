import {Canvas} from "@react-three/fiber";
import {Physics} from "@react-three/cannon";
import {Environment} from "@react-three/drei";
import Pointer from "./Components/Pointer";
import Clump from "./Components/Clump";
import CanvasHolder from "./Components/CanvasHolder";
import Html from "./Components/Html";
import * as THREE from "three";
import useDeviceOrientation from "./hooks/useDeviceOrientation";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {useWindowSize} from "react-use";

const sphereGeometry = new THREE.SphereGeometry(1, 32, 32)
const Holder = styled.div`
  .button,
  button {
    display: inline-block;

    padding: 0 10px;

    font-family:inherit;
    font-size: 20px;
    font-weight: 800;
    line-height: 2;
    text-decoration: none;
    white-space: nowrap;
    border: 2px solid;
    border-radius: 2px;
    text-transform: uppercase;

    color: inherit;
    background-color: transparent;

    &:hover {
      text-decoration: none;
      cursor: pointer;
    }
  }
`;

function App() {
  const [Overlay, orientation] = useDeviceOrientation()
  const [gravityX, setGravityX] = useState( 0 );
  const [gravityY, setGravityY] = useState( 2 );
  const size = useWindowSize();

  useEffect(() => {
    document.documentElement.style.setProperty('--windowHeight', `${size.height}px`);
  }, [size]);

  useEffect(() => {
    if(orientation) {
      if ( orientation.gamma < 0 ) {
        setGravityX(-15)
      } else {
        setGravityX(15)
      }

      if ( orientation.beta < 0 ) {
        setGravityY(15)
      } else {
        setGravityY(-15)
      }
    } else {
      setGravityX(0)
      setGravityY(2)
    }
  }, [orientation, setGravityX, setGravityY]);

  return (
    <Holder>
      <Overlay />
      <CanvasHolder>
        <Html/>
        <Canvas shadows dpr={[1, 2]} camera={{position: [0, 0, 20], fov: 35, near: 1, far: 40}}>
          <ambientLight intensity={0.25} />
          <spotLight intensity={0.5} angle={0.2} penumbra={1} position={[30, 30, 30]} castShadow
                     shadow-mapSize={[512, 512]} />
          <directionalLight intensity={0.5} position={[-10, -10, -10]} color="white" />
          <Physics gravity={[gravityX, gravityY, 0]} iterations={10}>
            <Pointer />
            <Clump geometry={sphereGeometry} material={0} count={30} />
            <Clump geometry={sphereGeometry} material={1} count={30} />
          </Physics>
          <Environment preset={'warehouse'} />
        </Canvas>
      </CanvasHolder>
    </Holder>
  );
}

export default App;
