import React, {useState} from 'react';
import {Instance} from "@react-three/drei";
import {useSphere} from "@react-three/cannon";
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";

const rfs = THREE.MathUtils.randFloatSpread
function Ball({vec = new THREE.Vector3()}) {
  const [ constrained, setConstrained ] = useState( true );

  // const sound = useMemo(() => new Audio('/bell.m4a'), [])
  //
  // const playAudio = (collision) => {
  //   // console.log(collision.contact.impactVelocity)
  //   if (collision.contact.impactVelocity > 3) {
  //     if(!sound.isPlaying){
  //       sound.currentTime = 0
  //       sound.play((sound.volume = 0.01 * collision.contact.impactVelocity))
  //     }
  //   }
  // }

  const [ref, api] = useSphere(() => ({
    args: [1],
    mass: 1,
    angularDamping: 0.1,
    linearDamping: 0.65,
    position: [rfs(20), rfs(20), rfs(20)],
    // onCollide: playAudio
  }))

  useFrame((state) => {
    if(constrained) {
      // Get current whereabouts of the instanced sphere
      const matrix = ref.current.matrix
      // Normalize the position and multiply by a negative force.
      // This is enough to drive it towards the center-point.
      api.applyForce(vec.setFromMatrixPosition(matrix).normalize().multiplyScalar(-50).toArray(), [0, 0, 0])
    }
  })

  return (
    <Instance
    ref={ref}
    castShadow receiveShadow
    onClick={() => {
      setConstrained(false)
      api.applyLocalImpulse([0,-20,0], [0,0,0])
    }}/>
  )
}

export default Ball;