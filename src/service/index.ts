import { MOCK_GAMES } from "../mock/games";
import type { IGamePlayerStats } from "../models/Game";
import type { IPlayerStats } from "../models/PlayerStats";

export type TAverage = { bestHeroes: string[] } & IPlayerStats;

export const getAverageValues = (playerID: number): TAverage => {
  const games: IGamePlayerStats[] = MOCK_GAMES.filter((item) =>
    item.players.find((item) => item.id === playerID)
  ).map((item) => item.players.find((item) => item.id === playerID)!);

  const stats: TAverage = {
    id: playerID,
    kills: 0,
    deaths: 0,
    assists: 0,
    lastHits: 0,
    denies: 0,
    gold: 0,
    goldPerMin: 0,
    xpPerMin: 0,
    heroDamage: 0,
    towerDamage: 0,
    heroHealing: 0,
    damageReceived: 0,
    bestHeroes: [],
  };

  const bestHeroes = new Set<string>();

  if (!games.length) {
    return stats;
  }

  games.forEach((item) => {
    stats.kills += item.kills;
    stats.deaths += item.deaths;
    stats.assists += item.assists;
    stats.lastHits += item.lastHits;
    stats.denies += item.denies;
    stats.gold += item.gold;
    stats.goldPerMin += item.goldPerMin;
    stats.xpPerMin += item.xpPerMin;
    stats.heroDamage += item.heroDamage;
    stats.towerDamage += item.towerDamage;
    stats.heroHealing += item.heroHealing;
    stats.damageReceived += item.damageReceived;
    bestHeroes.add(item.hero);
  });

  stats.kills = Math.round(stats.kills / games.length);
  stats.deaths = Math.round(stats.deaths / games.length);
  stats.assists = Math.round(stats.assists / games.length);
  stats.lastHits = Math.round(stats.lastHits / games.length);
  stats.denies = Math.round(stats.denies / games.length);
  stats.gold = Math.round(stats.gold / games.length);
  stats.goldPerMin = Math.round(stats.goldPerMin / games.length);
  stats.xpPerMin = Math.round(stats.xpPerMin / games.length);
  stats.heroDamage = Math.round(stats.heroDamage / games.length);
  stats.towerDamage = Math.round(stats.towerDamage / games.length);
  stats.heroHealing = Math.round(stats.heroHealing / games.length);
  stats.damageReceived = Math.round(stats.damageReceived / games.length);
  stats.bestHeroes = Array.from(bestHeroes.keys());

  return stats;
};
