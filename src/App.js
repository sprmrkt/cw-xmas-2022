import {Canvas} from "@react-three/fiber";
import {Physics} from "@react-three/cannon";
import {Environment, Sky} from "@react-three/drei";
import Pointer from "./Components/Pointer";
import Clump from "./Components/Clump";
import CanvasHolder from "./Components/CanvasHolder";
import Html from "./Components/Html";


function App() {
  return (
    <CanvasHolder>
      <Html/>
      <Canvas shadows dpr={[1, 2]} camera={{position: [0, 0, 20], fov: 35, near: 1, far: 40}}>
        <ambientLight intensity={0.25} />
        <spotLight intensity={1} angle={0.2} penumbra={1} position={[30, 30, 30]} castShadow
                   shadow-mapSize={[512, 512]} />
        <directionalLight intensity={5} position={[-10, -10, -10]} color="purple" />
        <Physics gravity={[0, 2, 0]} iterations={10}>
          <Pointer />
          <Clump />
        </Physics>
        <Environment preset={'warehouse'} />
        {/*<Sky />*/}
      </Canvas>
    </CanvasHolder>
  );
}

export default App;
