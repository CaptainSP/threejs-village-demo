import { useLoader } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

import BuildingExample from "../buildings/BuildingExample";

function Scene() {
  const colorMap = useLoader(
    TextureLoader,
    "/buildings/blue/hexagons_medieval.png"
  );

  return (
    <>
      <OrbitControls
        // minPolarAngle={Math.PI / 6}
        // maxPolarAngle={Math.PI / 3}
        enablePan={false}
        enableRotate={false}
      />
      {/* Lighting */}
      <ambientLight intensity={1} />
      <directionalLight
        color="#9e69da"
        intensity={0.8}
        position={[5, 5, 5]}
        castShadow
      />

      {/* <EmptyLot scale={0.01} position={[-2, 0.1, 2]} /> */}
      <BuildingExample scale={0.01} position={[0, 0, -2]} />

      {/* <EmptyLot scale={0.01} position={[2, 0.1, 2]} />
      <Mine scale={0.01} position={[2, 0, 2]} rotation-y={0.25 * Math.PI} />

      <EmptyLot scale={0.01} position={[0, 0.1, -2]} /> */}

      <RigidBody colliders={false} type="fixed" position-y={-0.5}>
        {/* <CuboidCollider args={[0.5, 0.5, 0.5]} /> */}
        <Box scale={[10, 1, 10]} receiveShadow>
          {/* <meshStandardMaterial map={colorMap} /> */}
        </Box>
      </RigidBody>
    </>
  );
}

export default Scene;
