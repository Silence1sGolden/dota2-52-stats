import { useEffect, useState } from "react";
import style from "./BestPlayer.module.scss";
import type { IPlayer, TAverage } from "../../models/PlayerStats";
import { getDataApi } from "../../api";

export function BestPlayer({ stats }: { stats: TAverage }) {
  const [player, setPlayer] = useState<IPlayer | null>(null);

  useEffect(() => {
    getDataApi("players").then((data) => {
      const lost = (data as IPlayer[]).find((item) => item.id === stats.id);

      if (lost) {
        setPlayer(lost);
      }
    });
  }, []);

  if (!player) {
    return <div>Error</div>;
  }

  return (
    <li className={style.player}>
      <p className={style.highlightedText}>{stats.rating}</p>
      <div className={style.profile}>
        <img
          className={style.avatar}
          src={player.avatar}
          alt={player.username}
        />
        <p className={style.username}>{player.username}</p>
      </div>
      <table className={style.table}>
        <tbody>
          <tr>
            <td>K</td>
            <td>D</td>
            <td>A</td>
          </tr>
          <tr>
            <td>{stats.kills}</td>
            <td>{stats.deaths}</td>
            <td>{stats.assists}</td>
          </tr>
          <tr>
            <td>NET</td>
            <td>HD</td>
            <td>DR</td>
          </tr>
          <tr>
            <td>{stats.gold}</td>
            <td>{stats.heroDamage}</td>
            <td>{stats.damageReceived}</td>
          </tr>
          <tr>
            <td>LH</td>
            <td>DN</td>
            <td>TD</td>
          </tr>
          <tr>
            <td>{stats.lastHits}</td>
            <td>{stats.denies}</td>
            <td>{stats.towerDamage}</td>
          </tr>
          <tr>
            <td>GPM</td>
            <td>XPM</td>
            <td>HH</td>
          </tr>
          <tr>
            <td>{stats.goldPerMin}</td>
            <td>{stats.xpPerMin}</td>
            <td>{stats.heroHealing}</td>
          </tr>
        </tbody>
      </table>
      <div className={style.popularHero}>
        <p className={style.title}>Best Heroes</p>
        <div className={style.heroList}>
          {stats.bestHeroes.map((item, index) => (
            <img
              key={index}
              className={style.hero}
              src={`https://cdn.steamstatic.com/apps/dota2/images/dota_react/heroes/${item}.png`}
              alt={item}
            />
          ))}
        </div>
      </div>
    </li>
  );
}
