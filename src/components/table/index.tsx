import { MOCK_PLAYERS } from "../../mock/players";
import { Player } from "../player";
import style from "./Table.module.scss";

export function Table() {
  return (
    <ul className={style.list}>
      {MOCK_PLAYERS.map((player) => (
        <li key={player.username}>
          <Player player={player} />
        </li>
      ))}
    </ul>
  );
}
