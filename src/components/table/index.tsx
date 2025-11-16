import { AVERAGE } from "../../data/average";
import { Player } from "../player";
import style from "./Table.module.scss";

export function Table() {
  return (
    <ul className={style.list}>
      {AVERAGE.sort((a, b) => {
        const aRating = +a.rating;
        const bRating = +b.rating;
        if (aRating > bRating) {
          return -1;
        } else if (aRating < bRating) {
          return 1;
        }
        // a === b
        return 0;
      }).map((stats) => (
        <li key={stats.id}>
          <Player stats={stats} />
        </li>
      ))}
    </ul>
  );
}
