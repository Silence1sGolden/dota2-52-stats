import type { THeroes } from "../models/Heroes";
import type { IPlayerStats } from "../models/PlayerStats";

export type TAverage = {
  rating: string;
  gamesCount: number;
  bestHeroes: THeroes[];
} & IPlayerStats;
