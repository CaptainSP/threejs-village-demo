import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export const gameStates = {
  VILLAGE: "VILLAGE",
  TASKS: "TASKS",
  SOCIAL: "SOCIAL",
  EDUCATION: "EDUCATION",
};

export const useGameStore = create(
  subscribeWithSelector((set, get) => ({
    userLevel: 0,
    userName: "kullanici",
    gameState: gameStates.VILLAGE,
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
