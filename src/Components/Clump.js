import React from 'react';
import {Instances, useTexture} from "@react-three/drei";
import * as THREE from "three"
import Ball from "./Ball";

const red = new THREE.Color( 0xFF4E36 ).convertSRGBToLinear();
const green = new THREE.Color( 0x1CC19A ).convertSRGBToLinear();

function Clump(props) {
  const materials = [
    new THREE.MeshStandardMaterial({
      color: red,
      roughness: 0,
      envMapIntensity: 0.2,
      map: useTexture("/owl-texture.jpg")
    }),
    new THREE.MeshStandardMaterial({
      color: green,
      roughness: 0,
      envMapIntensity: 0.2,
      map: useTexture("/supermarket-texture.jpg")
    })
  ]

  const balls = [];
  for (let i = 0; i < props.count; i++) {
    balls.push(<Ball key={i} />);
  }

  return <Instances
    count={props.count}
    geometry={props.geometry}
    material={materials[props.material]}>
    {balls}
  </Instances>
}

export default Clump;