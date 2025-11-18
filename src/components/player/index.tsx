import { useEffect, useState } from "react";
import style from "./Player.module.scss";
import type { IPlayer, TAverage } from "../../models/PlayerStats";
import { getDataApi } from "../../api";
import { Details } from "./Details";
import { StatElement } from "../StatElement";
import { BestHeroes } from "../BestHeroes";
import clsx from "clsx";

export function Player({ stats, best }: { stats: TAverage; best?: boolean }) {
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
      <div className={style.info}>
        <p className={clsx(style.rating, best && style.best)}>{stats.rating}</p>
        <div className={style.profile}>
          <img
            className={style.avatar}
            src={player.avatar}
            alt={player.username}
          />
          <p>{player.username}</p>
        </div>
        <div className={style.kda}>
          <StatElement
            title="K"
            value={stats.kills}
            options={{ transcript: "Kills" }}
          />
          <StatElement
            title="D"
            value={stats.deaths}
            options={{ transcript: "Deaths" }}
          />
          <StatElement
            title="A"
            value={stats.assists}
            options={{ transcript: "Assists" }}
          />
        </div>
        <BestHeroes heroes={stats.bestHeroes} classNames={style.bestHeroes} />
      </div>
      <Details stats={stats} />
    </li>
  );
}
