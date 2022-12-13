import React from 'react';
import {useTexture} from "@react-three/drei";
import {useSphere} from "@react-three/cannon";
import {useFrame} from "@react-three/fiber";
import * as THREE from "three"

const rfs = THREE.MathUtils.randFloatSpread
// const sphereGeometry = new THREE.SphereGeometry(1, 32, 32)
// const baubleMaterial = new THREE.MeshStandardMaterial({
//   color: "red",
//   roughness: 0,
//   envMapIntensity: 0.2,
//   emissive: "#370037"
// })

function Clump({mat = new THREE.Matrix4(), vec = new THREE.Vector3(), ...props}) {

  const textures = [
    useTexture("/owl-texture.jpg"),
    useTexture("/supermarket-texture.jpg"),
    useTexture("/2022-texture.jpg")
  ]

  const [ref, api] = useSphere(() => ({
    args: [1],
    mass: 1,
    angularDamping: 0.1,
    linearDamping: 0.65,
    position: [rfs(20), rfs(20), rfs(20)]
  }))
  useFrame((state) => {
    for (let i = 0; i < props.count; i++) {
      // Get current whereabouts of the instanced sphere
      ref.current.getMatrixAt(i, mat)
      // Normalize the position and multiply by a negative force.
      // This is enough to drive it towards the center-point.
      api.at(i).applyForce(vec.setFromMatrixPosition(mat).normalize().multiplyScalar(-50).toArray(), [0, 0, 0])
    }
  })
  return <instancedMesh
    ref={ref} castShadow receiveShadow
    args={[null, null, props.count]}
    geometry={props.geometry}
    material={props.material}
    material-map={textures[props.texture]}
    onClick={(e) => {
      e.object.visible = false
      console.log(e, 'clicked')
    }}
  />
}

export default Clump;