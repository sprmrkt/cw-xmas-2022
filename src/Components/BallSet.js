import React from 'react';
import {Instances, useTexture} from "@react-three/drei";
import Ball from "./Ball";
import * as THREE from "three";

const BallSet = (props) => {
  const materials = [
    new THREE.MeshStandardMaterial({
      color: "red",
      roughness: 0,
      envMapIntensity: 0.2,
      map: useTexture("/owl-texture.jpg")
    }),
    new THREE.MeshStandardMaterial({
      color: "green",
      roughness: 0,
      envMapIntensity: 0.2,
      map: useTexture("/supermarket-texture.jpg")
    }),
    new THREE.MeshStandardMaterial({
      color: "white",
      roughness: 0,
      envMapIntensity: 0.2,
      map: useTexture("/2022-texture.jpg")
    })
  ]

  const balls = [];
  for (let i = 0; i < props.count; i++) {
    balls.push(<Ball key={i} {...props} />);
  }
  return (
    <Instances
      range={props.count}
      material={materials[props.material]}
      geometry={props.geometry}>
      {balls}
    </Instances>
  )
}

export default BallSet