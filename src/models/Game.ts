import type { THeroes } from "./Heroes";
import type { IPlayerStats } from "./PlayerStats";

export interface IGamePlayerStats extends IPlayerStats {
  hero: THeroes;
  side: "Dire" | "Radiant";
}

export interface IGame {
  gameTimeLenght: number;
  teamWin: "Dire" | "Radiant";
  players: IGamePlayerStats[];
}
