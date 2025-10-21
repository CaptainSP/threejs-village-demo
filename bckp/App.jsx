import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";

import Scene from "../src/features/scene/Scene";
import Scene2 from "../src/features/scene/Scene2";
import ThreeLoader from "./components/ThreeLoader";

function App() {
  return (
    <div id="canvas-container">
      <Canvas
        camera={{ position: [10, 10, 10], fov: 50 }}
        style={{ width: "100vw", height: "100vh" }}
        fallback={<div>Device does not support WebGL</div>}
        shadows
      >
        <color attach="background" args={["#dbecfb"]} />
        <Suspense fallback={<ThreeLoader />}>
          <Physics>
            <Scene2 />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
