import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";

function EmptyLot(props) {
  const fbx = useLoader(FBXLoader, "/assets/hex_grass.fbx");

  const modal = fbx.clone();

  return (
    <primitive
      {...props}
      object={modal}
      onClick={() => console.log("Boş Alan")}
      dispose={null}
    />
  );
}

export default EmptyLot;
