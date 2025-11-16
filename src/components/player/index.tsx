import type { IPlayer } from "../../mock/players";
import { getAverageValues } from "../../service";
import { MorePlayerInfo } from "./morePlayerInfo";
import style from "./Player.module.scss";

export function Player({ player }: { player: IPlayer }) {
  const stats = getAverageValues(player.id);

  return (
    <div className={style.player}>
      <div className={style.mainInfo}>
        <div className={style.profile}>
          <img
            className={style.avatar}
            src={player.avatar}
            alt={player.username}
          />
          <p>{player.username}</p>
        </div>
        <table>
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
    </div>
  );
}
