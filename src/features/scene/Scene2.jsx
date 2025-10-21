import { Box, OrbitControls } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useLoader } from "@react-three/fiber";
import { TextureLoader, RepeatWrapping } from "three";

import BuildLots from "../buildings/BuildLots";

function Scene2() {
  const groundTexture = useLoader(TextureLoader, "/assets/ground_texture.png");

  groundTexture.wrapS = RepeatWrapping;
  groundTexture.wrapT = RepeatWrapping;
  groundTexture.repeat.set(10, 10);

  return (
    <>
      <OrbitControls
        enablePan={true}
        enableRotate={false}
        enableZoom={true}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 3}
        mouseButtons={{
          LEFT: 2,
          MIDDLE: 1,
          RIGHT: 0,
        }}
        enableDamping={true}
        dampingFactor={0.05}
        screenSpacePanning={false}
        panSpeed={0.5}
        zoomSpeed={0.5}
        touches={{
          ONE: 2, // Tek parmak - Pan (kaydırma)
          TWO: 1, // İki parmak - Zoom (pinch)
        }}
        maxDistance={20}
        minDistance={10}
      />

      <ambientLight intensity={0.4} />

      <directionalLight
        position={[10, 15, 10]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-bias={-0.0001}
      />

      <directionalLight
        position={[-5, 8, -5]}
        intensity={0.3}
        color="#9eb3ff"
      />

      <directionalLight
        position={[0, 5, -10]}
        intensity={0.2}
        color="#ffd4a3"
      />

      <hemisphereLight args={["#87ceeb", "#d4a574", 0.5]} />

      <BuildLots />

      <RigidBody colliders={false} type="fixed" position-y={-0.5}>
        <Box scale={[15, 1, 15]} receiveShadow>
          <meshStandardMaterial
            map={groundTexture}
            roughness={0.8}
            metalness={0.2}
          />
        </Box>
      </RigidBody>
    </>
  );
}

export default Scene2;
