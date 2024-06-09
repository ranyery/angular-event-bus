export const enum ESharedEvents {
  ADD,
  SUBTRACT,
  RESET,
}

export type SharedEventActionMap = {
  [ESharedEvents.ADD]: number;
  [ESharedEvents.SUBTRACT]: number;
  [ESharedEvents.RESET]?: null;
};
