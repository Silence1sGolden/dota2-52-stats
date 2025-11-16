import type { THeroes } from "./Heroes";
import type { IPlayerStats } from "./PlayerStats";

export interface IGamePlayerStats extends IPlayerStats {
  hero: THeroes;
  side: "Dire" | "Radiant";
  position: "carry" | "mider" | "support" | "harder" | "hard_support";
}

export interface IGame {
  date: string;
  gameTimeLenght: string;
  teamWin: "Dire" | "Radiant";
  players: IGamePlayerStats[];
}
