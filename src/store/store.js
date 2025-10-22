import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export const gameStates = {
  VILLAGE: "VILLAGE",
  TASKS: "TASKS",
  SOCIAL: "SOCIAL",
  EDUCATION: "EDUCATION",
};

// Generate building lot positions (consistent across the app)
const generateLotPositions = () => {
  const positions = {};
  const usedPositions = new Set();

  for (let i = 0; i < 9; i++) {
    let x, z, posKey;
    let attempts = 0;

    do {
      x = Math.floor(Math.random() * 7) - 3;
      z = Math.floor(Math.random() * 7) - 3;
      posKey = `${x},${z}`;
      attempts++;

      if (attempts > 100) break;
    } while (usedPositions.has(posKey));

    usedPositions.add(posKey);
    positions[i] = { x: x * 2, z: z * 2 };
  }

  return positions;
};

export const useGameStore = create(
  subscribeWithSelector((set, get) => ({
    userLevel: 0,
    userName: "kullanici",
    gameState: gameStates.VILLAGE,
    activeObject: null,
    lotPositions: generateLotPositions(),
    buildLots: {
      0: {
        entity: "building_tower_base",
        level: 2,
        status: "active",
        stateStartDate: null,
        stateEndDate: null,
      },
      1: {
        entity: null,
        level: 0,
        status: null,
        stateStartDate: null,
        stateEndDate: null,
      },
      2: {
        entity: "building_mine",
        level: 1,
        status: "active",
        stateStartDate: null,
        stateEndDate: null,
      },
      3: {
        entity: "building_market",
        level: 1,
        status: "building",
        stateStartDate: null,
        stateEndDate: null,
      },
      4: {
        entity: null,
        level: 0,
        status: null,
        stateStartDate: null,
        stateEndDate: null,
      },
      5: {
        entity: null,
        level: 0,
        status: null,
        stateStartDate: null,
        stateEndDate: null,
      },
      6: {
        entity: null,
        level: 0,
        status: null,
        stateStartDate: null,
        stateEndDate: null,
      },
      7: {
        entity: "building_market",
        level: 1,
        status: "active",
        stateStartDate: null,
        stateEndDate: null,
      },
      8: {
        entity: null,
        level: 0,
        status: null,
        stateStartDate: null,
        stateEndDate: null,
      },
    },
    decorationLots: {
      0: {
        object: "weaponrack",
      },
      1: {
        object: null,
      },
    },
    // Select Build or Decoration
    setActiveObject: (object, id, type = "build") => {
      set((state) => ({
        activeObject: object
          ? {
              data: object,
              id: id,
              type: type, // 'build' or 'decoration'
            }
          : null,
      }));
    },
    // Upgrade Building
    upgradeBuilding: (lotId) => {
      const lots = get().buildLots;
      const lot = lots?.[lotId];

      if (!lot || !lot.entity) return;

      set((state) => ({
        buildLots: {
          ...state.buildLots,
          [lotId]: {
            ...state.buildLots[lotId],
            level: state.buildLots[lotId].level + 1,
            status: "active",
          },
        },
      }));
    },
  }))
);
