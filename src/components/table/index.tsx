import type { TAverage } from "../../models/PlayerStats";
import { Player } from "../Player";
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
      {sortedPlayers.map((stats, index) => (
        <Player key={stats.id} stats={stats} best={index === 0} />
      ))}
    </ul>
  );
}
