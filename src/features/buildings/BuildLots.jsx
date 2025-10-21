import { useGameStore } from "../../store/store";

function BuildLots() {
  const { buildLots } = useGameStore((state) => ({
    buildLots: state.buildLots,
  }));

  console.log(buildLots);

  return (
    <>
      <EmptyLot scale={0.01} position={[-2, 0.1, 2]} />
    </>
  );
}

export default BuildLots;
