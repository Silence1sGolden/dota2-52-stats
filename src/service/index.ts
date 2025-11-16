import type { IPlayerStats } from "../models/PlayerStats";

export type TAverage = {
  rating: string;
  gamesCount: number;
} & IPlayerStats;
