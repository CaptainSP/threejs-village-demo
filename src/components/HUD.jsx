import BuildingMenu from "../features/buildings/BuildingMenu";

function HUD() {
  return (
    <div className="w-dvw h-dvh absolute bg-stone-700">
      <BuildingMenu />
    </div>
  );
}

export default HUD;
