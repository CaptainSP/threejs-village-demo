import { createPortal } from "react-dom";

import { useGameStore } from "../../store/store";

function BuildingMenu() {
  const activeObject = useGameStore((state) => state.activeObject);
  const upgradeBuilding = useGameStore((state) => state.upgradeBuilding);

  console.log(activeObject);

  return createPortal(
    <div className="absolute my-auto bottom-4 bg-stone-300 p-2">
      <h3>Bina Adi</h3>
      {activeObject !== null && (
        <>
          <h3>
            {activeObject.data.entity} ({activeObject.data.level}. Seviye)
          </h3>

          <div className="flex flex-row p-2 gap-2">
            <button className="p-2 bg-orange-600 text-stone-200">
              Detaylar
            </button>
            {activeObject.data.status === `active` ? (
              <button
                className="p-2 bg-orange-600 text-stone-200"
                onClick={() => upgradeBuilding(activeObject.id)}
              >
                Yükselt
              </button>
            ) : (
              <p>Yusekltiliyor...</p>
            )}
          </div>
        </>
      )}
    </div>,
    document.body
  );
}

export default BuildingMenu;
