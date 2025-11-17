import type { THeroes } from "./Heroes";

export type TAverage = {
  rating: string;
  gamesCount: number;
  bestHeroes: THeroes[];
} & IPlayerStats;

export interface IPlayer {
  id: number;
  username: string;
  avatar: string;
}

export interface IPlayerStats {
  id: number;
  kills: number;
  deaths: number;
  assists: number;
  lastHits: number;
  denies: number;
  gold: number;
  goldPerMin: number;
  xpPerMin: number;
  heroDamage: number;
  towerDamage: number;
  heroHealing: number;
  damageReceived: number;
  supGoldSpent: number;
  obsBuy: number;
  campStacked: number;
}
