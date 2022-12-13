import {Canvas} from "@react-three/fiber";
import {Physics} from "@react-three/cannon";
import {Environment} from "@react-three/drei";
import Pointer from "./Components/Pointer";
import Clump from "./Components/Clump";
import CanvasHolder from "./Components/CanvasHolder";
import Html from "./Components/Html";
import * as THREE from "three";
import ControlBall from "./Components/ControlBall";
import {useRef} from "react";
import BallSet from "./Components/BallSet";

const sphereGeometry = new THREE.SphereGeometry(1, 32, 32)

function App() {
  const controlRef = useRef(null)
  return (
    <CanvasHolder>
      <Html />
      <Canvas shadows dpr={[1, 2]} camera={{position: [0, 0, 20], fov: 35, near: 1, far: 40}}>
        <ambientLight intensity={0.25} />
        <spotLight intensity={1} angle={0.2} penumbra={1} position={[30, 30, 30]} castShadow
                   shadow-mapSize={[512, 512]} />
        <directionalLight intensity={1} position={[-10, -10, -10]} color="white" />
        <Physics gravity={[0, 2, 0]} iterations={10}>
          <ControlBall ref={controlRef}/>
          <BallSet controlRef={controlRef} geometry={sphereGeometry} material={0} count={13} restLength={4} stiffness={20}/>
          <BallSet controlRef={controlRef} geometry={sphereGeometry} material={1} count={13} restLength={4} stiffness={50}/>
          <BallSet controlRef={controlRef} geometry={sphereGeometry} material={2} count={13} restLength={4} stiffness={100}/>
          {/*<Pointer />*/}
          {/*<Clump geometry={sphereGeometry} material={redMaterial} count={15} texture={0}/>*/}
          {/*<Clump geometry={sphereGeometry} material={greenMaterial} count={15} texture={1}/>*/}
          {/*<Clump geometry={sphereGeometry} material={yellowMaterial} count={15} texture={2}/>*/}
        </Physics>
        <Environment preset={'warehouse'} />
      </Canvas>
    </CanvasHolder>
  );
}

export default App;
