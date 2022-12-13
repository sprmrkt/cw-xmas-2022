import React, {forwardRef} from 'react';
import {useSphere} from "@react-three/cannon";
import {useFrame} from "@react-three/fiber";

const ControlBall = forwardRef((props, fwdRef) => {
  const [ref, { position }] = useSphere(() => ({ args: [1], type: 'Kinematic', ...props }), fwdRef)
  useFrame(({ mouse, viewport }) =>
    position.set((mouse.x * viewport.width) / 2, (mouse.y * viewport.height) / 2, 0),
  )
  return (
    <mesh ref={ref} visible={false}>
      <sphereBufferGeometry args={[1, 12, 12]} />
    </mesh>
  )
})

export default ControlBall;


