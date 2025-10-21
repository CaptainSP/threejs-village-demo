import { useMemo } from "react";

import { useGameStore } from "../../store/store";
import EmptyLot from "../background/EmptyLot";
import BuildingExample from "./BuildingExample";
import BuildingProduction from "./BuildingProduction";

function BuildLots() {
  const buildLots = useGameStore((state) => state.buildLots);

  const lotPositions = useMemo(() => {
    const positions = {};
    const usedPositions = new Set();

    // 9 tane pozisyon üret
    for (let i = 0; i < 9; i++) {
      let x, z, posKey;
      let attempts = 0;

      // Çakışmayan pozisyon bul
      do {
        x = Math.floor(Math.random() * 7) - 3; // -3 ile 3 arası
        z = Math.floor(Math.random() * 7) - 3;
        posKey = `${x},${z}`;
        attempts++;

        if (attempts > 100) break; // Sonsuz döngüyü önle
      } while (usedPositions.has(posKey));

      usedPositions.add(posKey);
      positions[i] = { x: x * 2, z: z * 2 }; // Aralarında boşluk için *2
    }

    return positions;
  }, []);

  return Object.entries(buildLots).map(([id, lot]) => {
    const position = lotPositions[id] || { x: 0, z: 0 };
    const pos = [position.x, 0.1, position.z];

    if (lot.entity === null)
      return <EmptyLot key={id} scale={0.005} position={pos} />;

    if (lot.status === `building`)
      return <BuildingProduction key={id} scale={0.01} position={pos} />;

    return (
      <BuildingExample
        asset={lot.entity}
        key={id}
        scale={0.01}
        position={pos}
        rotation-y={0.23 * Math.PI}
      />
    );
  });
}

export default BuildLots;
