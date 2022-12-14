import {Canvas} from "@react-three/fiber";
import {Physics} from "@react-three/cannon";
import {Environment} from "@react-three/drei";
import Pointer from "./Components/Pointer";
import Clump from "./Components/Clump";
import CanvasHolder from "./Components/CanvasHolder";
import Html from "./Components/Html";
import * as THREE from "three";

const sphereGeometry = new THREE.SphereGeometry(1, 32, 32)
const red = new THREE.Color( 0xFF4E36 ).convertSRGBToLinear();
const redMaterial = new THREE.MeshStandardMaterial({
  color: red,
  roughness: 0,
  envMapIntensity: 0.2,
  // emissive: "#370037"
})
const greenMaterial = new THREE.MeshStandardMaterial({
  color: "white",
  roughness: 0,
  envMapIntensity: 0.2,
  // emissive: "#370037"
})
// const yellowMaterial = new THREE.MeshStandardMaterial({
//   color: "white",
//   roughness: 0,
//   envMapIntensity: 0.2,
//   // emissive: "#370037"
// })

function App() {
  return (
    <CanvasHolder>
      <Html />
      <Canvas shadows dpr={[1, 2]} camera={{position: [0, 0, 20], fov: 35, near: 1, far: 40}}>
        <ambientLight intensity={0.25} />
        <spotLight intensity={1} angle={0.2} penumbra={1} position={[30, 30, 30]} castShadow
                   shadow-mapSize={[512, 512]} />
        <directionalLight intensity={1} position={[-10, -10, -10]} color="white" />
        <Physics gravity={[0, 2, 0]} iterations={10}>
          <Pointer />
          <Clump geometry={sphereGeometry} material={redMaterial} count={30} texture={0}/>
          <Clump geometry={sphereGeometry} material={greenMaterial} count={30} texture={1}/>
        </Physics>
        <Environment preset={'warehouse'} />
      </Canvas>
    </CanvasHolder>
  );
}

export default App;
