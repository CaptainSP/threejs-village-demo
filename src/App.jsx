import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";

import Scene from "./features/scene/Scene";
import BuildingMenu from "./features/buildings/BuildingMenu";

function App() {
  return (
    <main>
      <div id="canvas-container">
        <Canvas
          camera={{ position: [10, 10, 10], fov: 50 }}
          style={{ width: "100vw", height: "100vh" }}
          fallback={<div>Device does not support WebGL</div>}
          gl={{ antialias: false, preserveDrawingBuffer: false }}
        >
          <color attach="background" args={["#dbecfb"]} />
          <Suspense>
            <Physics debug>
              <Scene />
            </Physics>
          </Suspense>
        </Canvas>
      </div>

      <BuildingMenu />
    </main>
  );
}

export default App;
