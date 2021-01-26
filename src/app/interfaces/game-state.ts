export interface GameState {
  gameName: string;
  gamePhase: string;
  activePlayerName: string;
  board: Map<string, number>;
  dice: number[];

}
