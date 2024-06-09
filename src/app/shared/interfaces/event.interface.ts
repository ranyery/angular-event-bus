export interface IEvent<PayloadMap> {
  key: keyof PayloadMap;
  data: PayloadMap[keyof PayloadMap];
}
