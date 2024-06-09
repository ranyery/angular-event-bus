export const enum ESharedEvents {
  ADD,
  SUBTRACT,
  RESET,
}

export type SharedEventPayloadMap = {
  [ESharedEvents.ADD]: number;
  [ESharedEvents.SUBTRACT]: number;
  [ESharedEvents.RESET]: undefined;
};
