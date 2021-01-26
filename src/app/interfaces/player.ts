export interface Player {
  name: string;
  money: number;
  projects: Map<string, boolean>;
  businesses: Map<string, number>;
}
