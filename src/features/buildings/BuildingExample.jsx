import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";

function BuildingExample({ asset, ...props }) {
  const fbx = useLoader(
    FBXLoader,
    `/assets/${asset || `building_barracks`}_blue.fbx`
  );

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
