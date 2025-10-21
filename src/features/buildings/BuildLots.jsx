import { useGameStore } from "../../store/store";
import EmptyLot from "../background/EmptyLot";
import BuildingExample from "./BuildingExample";
import BuildingProduction from "./BuildingProduction";

function BuildLots() {
  const buildLots = useGameStore((state) => state.buildLots);

  return Object.entries(buildLots).map(([id, lot]) => {
    const x = (parseInt(id) % 3) * 2 - 2;
    const z = Math.floor(parseInt(id) / 3) * 2;

    if (lot.entity === null)
      return <EmptyLot key={id} scale={0.005} position={[x, 0.1, z]} />;

    if (lot.status === `building`)
      return (
        <BuildingProduction key={id} scale={0.01} position={[x, 0.1, z]} />
      );

    return <BuildingExample key={id} scale={0.01} position={[x, 0.1, z]} />;
  });
}

export default BuildLots;
