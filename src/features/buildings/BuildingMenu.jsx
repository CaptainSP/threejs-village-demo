import { createPortal } from "react-dom";

function BuildingMenu() {
  return createPortal(
    <div className="absolute bottom-4 bg-stone-300 p-2 text-2xl">Deneme</div>,
    document.body
  );
}

export default BuildingMenu;
