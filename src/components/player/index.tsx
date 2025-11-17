import { useEffect, useState } from "react";
import type { TAverage } from "../../service";
import { MorePlayerInfo } from "./morePlayerInfo";
import style from "./Player.module.scss";
import type { IPlayer } from "../../models/PlayerStats";
import { getDataApi } from "../../api";

export function Player({ stats }: { stats: TAverage }) {
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
    return <div>ERROR</div>;
  }

  return (
    <li className={style.player}>
      <div className={style.mainInfo}>
        <p className={style.rating}>{stats.rating}</p>
        <div className={style.profile}>
          <img
            className={style.avatar}
            src={player.avatar}
            alt={player.username}
          />
          <p>{player.username}</p>
        </div>
        <table className={style.table}>
          <thead>
            <tr>
              <th>K</th>
              <th>D</th>
              <th>A</th>
              <th>NET</th>
              <th>HD</th>
              <th>DR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{stats.kills}</td>
              <td>{stats.deaths}</td>
              <td>{stats.assists}</td>
              <td>{stats.gold}</td>
              <td>{stats.heroDamage}</td>
              <td>{stats.damageReceived}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <MorePlayerInfo stats={stats} />
    </li>
  );
}
