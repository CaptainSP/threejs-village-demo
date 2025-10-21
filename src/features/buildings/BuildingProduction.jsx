import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";

function BuildingProduction(props) {
  const fbx = useLoader(FBXLoader, "/assets/building_stage_C.fbx");

  const model = fbx.clone();

  return (
    <primitive
      {...props}
      object={model}
      onClick={() => console.log("Bina insa ediliyor")}
      dispose={null}
    />
  );
}

export default BuildingProduction;
