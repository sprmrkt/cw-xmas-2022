import React, {useMemo} from 'react';
import {Instances, useTexture} from "@react-three/drei";
import {useSphere} from "@react-three/cannon";
import {useFrame} from "@react-three/fiber";
import * as THREE from "three"
import Ball from "./Ball";

// const rfs = THREE.MathUtils.randFloatSpread
const red = new THREE.Color( 0xFF4E36 ).convertSRGBToLinear();

function Clump(props) {
  // const sound = useMemo(() => new Audio('/hit.mp3'), [])
  // const textures = [
  //   useTexture("/owl-texture.jpg"),
  //   useTexture("/supermarket-texture.jpg")
  // ]
  const materials = [
    new THREE.MeshStandardMaterial({
      color: red,
      roughness: 0,
      envMapIntensity: 0.2,
      map: useTexture("/owl-texture.jpg")
    }),
    new THREE.MeshStandardMaterial({
      color: "white",
      roughness: 0,
      envMapIntensity: 0.2,
      map: useTexture("/supermarket-texture.jpg")
    })
  ]

  // const playAudio = (collision) => {
  //   // console.log(collision.contact.impactVelocity)
  //   if (collision.contact.impactVelocity > 0.5) {
  //     sound.currentTime = 0
  //     sound.play((sound.volume = 0.2))
  //   }
  // }

  // const [ref, api] = useSphere(() => ({
  //   args: [1],
  //   mass: 1,
  //   angularDamping: 0.1,
  //   linearDamping: 0.65,
  //   position: [rfs(20), rfs(20), rfs(20)],
  //   // onCollide: playAudio
  // }))

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