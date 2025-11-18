import type { THeroes } from "./Heroes";
import type { IPlayerStats } from "./PlayerStats";

export type TSides = "Dire" | "Radiant";
export type TPositions =
  | "carry"
  | "mider"
  | "support"
  | "harder"
  | "hard_support";

export interface IGamePlayerStats extends IPlayerStats {
  hero: THeroes;
  side: TSides;
  position: TPositions;
}

export interface IGame {
  date: string;
  gameTimeLenght: string;
  teamWin: TSides;
  players: IGamePlayerStats[];
}
