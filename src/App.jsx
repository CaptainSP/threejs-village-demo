import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";

import Scene2 from "./features/scene/Scene2";
import HUD from "./components/HUD";

function App() {
  return (
    <div id="canvas-container">
      <Canvas
        camera={{ position: [10, 10, 10], fov: 45 }}
        style={{ width: "100vw", height: "100vh" }}
        fallback={<div>Device does not support WebGL</div>}
        gl={{ antialias: true }}
        shadows
      >
        <color attach="background" args={["#dbecfb"]} />
        <Suspense>
          <Physics>
            <Scene2 />
          </Physics>
        </Suspense>
      </Canvas>

      <HUD />
    </div>
  );
}

export default App;
