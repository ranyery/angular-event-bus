export interface IEvent<ActionMap> {
  key: keyof ActionMap;
  data?: ActionMap[keyof ActionMap];
}
