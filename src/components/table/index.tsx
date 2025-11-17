import type { TAverage } from "../../models/PlayerStats";
import { BestPlayer } from "../bestPlayer";
import { Player } from "../player";
import style from "./Table.module.scss";

export function Table({ average }: { average: TAverage[] }) {
  if (!average.length) {
    return <h1>Пусто</h1>;
  }

  const sortedPlayers = average.sort((a, b) => {
    const aRating = +a.rating;
    const bRating = +b.rating;
    if (aRating > bRating) {
      return -1;
    } else if (aRating < bRating) {
      return 1;
    }
    return 0;
  });

  return (
    <ul className={style.list}>
      {<BestPlayer stats={sortedPlayers[0]} />}
      {sortedPlayers.slice(1).map((stats) => (
        <Player stats={stats} key={stats.id} />
      ))}
    </ul>
  );
}
