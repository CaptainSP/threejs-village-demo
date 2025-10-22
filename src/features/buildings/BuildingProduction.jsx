import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";

import { useGameStore } from "../../store/store";

function BuildingProduction({ buildData, buildId, ...props }) {
  const setActiveObject = useGameStore((state) => state.setActiveObject);

  const fbx = useLoader(FBXLoader, "/assets/building_stage_C.fbx");
  const model = fbx.clone();

  const handleClick = (e) => {
    e.stopPropagation(); // Event bubbling'i durdur
    setActiveObject(buildData, buildId, "build");
  };

  return (
    <primitive {...props} object={model} onClick={handleClick} dispose={null} />
  );
}

export default BuildingProduction;
