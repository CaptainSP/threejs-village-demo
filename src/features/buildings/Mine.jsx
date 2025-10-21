import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";

function Mine(props) {
  const fbx = useLoader(FBXLoader, "/assets/building_mine_blue.fbx");

  const modal = fbx.clone();

  return (
    <primitive
      {...props}
      object={modal}
      onClick={() => console.log("Altın Madeni")}
      dispose={null}
    />
  );
}

export default Mine;
