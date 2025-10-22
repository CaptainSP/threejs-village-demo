import { useGameStore } from "../../store/store";
import EmptyLot from "../background/EmptyLot";
import BuildingExample from "./BuildingExample";
import BuildingProduction from "./BuildingProduction";

function BuildLots() {
  const buildLots = useGameStore((state) => state.buildLots);
  const lotPositions = useGameStore((state) => state.lotPositions);

  return Object.entries(buildLots).map(([id, lot]) => {
    const position = lotPositions[id] || { x: 0, z: 0 };
    const pos = [position.x, 0.1, position.z];

    if (lot.entity === null)
      return <EmptyLot key={id} scale={0.005} position={pos} />;

    if (lot.status === "building")
      return (
        <BuildingProduction
          buildData={lot}
          buildId={id}
          key={id}
          scale={0.01}
          position={pos}
        />
      );

    return (
      <BuildingExample
        buildData={lot}
        buildId={id}
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
