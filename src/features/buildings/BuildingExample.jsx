import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";

function BuildingExample(props) {
  const fbx = useLoader(FBXLoader, "/assets/building_barracks_blue.fbx");

  const modal = fbx.clone();

  return (
    <primitive
      {...props}
      object={modal}
      onClick={() => console.log("Kasaba Merkezi")}
      dispose={null}
    />
  );
}

export default BuildingExample;
