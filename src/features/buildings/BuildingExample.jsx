import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";

import { useGameStore } from "../../store/store";

function BuildingExample({ buildData, buildId, asset, ...props }) {
  const setActiveObject = useGameStore((state) => state.setActiveObject);

  const fbx = useLoader(
    FBXLoader,
    `/assets/${asset || `building_barracks`}_blue.fbx`
  );
  const modal = fbx.clone();

  const handleClick = (e) => {
    e.stopPropagation(); // Event bubbling'i durdur
    setActiveObject(buildData, buildId, "build");
  };

  return (
    <primitive {...props} object={modal} onClick={handleClick} dispose={null} />
  );
}

export default BuildingExample;
