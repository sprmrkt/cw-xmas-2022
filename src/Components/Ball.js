import React from 'react';
import { useSphere, useSpring} from "@react-three/cannon";
import {Instance, useTexture} from "@react-three/drei";
import * as THREE from "three";

const rfs = THREE.MathUtils.randFloatSpread
const Ball = (props) => {

  const texture = useTexture("/owl-texture.jpg")

  const [ref] = useSphere(() => ({
    args: [1],
    mass: 1,
    angularDamping: 0.1,
    linearDamping: 0.65,
    position: [rfs(20), rfs(20), rfs(20)]
  }))

  useSpring(ref, props.controlRef, {
    damping: 1,
    restLength: props.restLength,
    stiffness: props.stiffness,
  })

  return (
    <Instance
      ref={ref}
      castShadow receiveShadow
      map={texture}
      />
  )
}

export default Ball