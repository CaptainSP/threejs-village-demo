import { Box, OrbitControls } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

import Mine from "../buildings/Mine";
import BuildingExample from "../buildings/BuildingExample";
import EmptyLot from "../background/EmptyLot";
import BuildLots from "../buildings/BuildLots";

function Scene2() {
  return (
    <>
      <OrbitControls enablePan={false} enableRotate={false} />

      <ambientLight intensity={1} />
      <directionalLight
        color="#9e69da"
        intensity={0.8}
        position={[5, 5, 5]}
        castShadow
      />

      {/* <Mine scale={0.01} position={[2, 0, 2]} rotation-y={0.25 * Math.PI} />

      <EmptyLot scale={0.01} position={[-2, 0.1, 2]} /> */}
      {/* <BuildingExample position={[0, 0, -2]} scale={0.01} /> */}

      <BuildLots />

      <RigidBody colliders={false} type="fixed" position-y={-0.5}>
        <Box scale={[10, 1, 10]} receiveShadow></Box>
      </RigidBody>
    </>
  );
}

export default Scene2;
