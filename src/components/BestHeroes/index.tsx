import clsx from "clsx";
import type { THeroes } from "../../models/Heroes";
import style from "./BestHeroes.module.scss";

export function BestHeroes({
  heroes,
  classNames,
}: {
  heroes: THeroes[];
  classNames?: string;
}) {
  return (
    <div className={clsx(style.bestHeroes, classNames)}>
      <p className={style.title}>Best Heroes</p>
      <div className={style.heroList}>
        {heroes.map((item, index) => (
          <img
            key={index}
            className={style.hero}
            src={`https://cdn.steamstatic.com/apps/dota2/images/dota_react/heroes/${item}.png`}
            alt={item}
          />
        ))}
      </div>
    </div>
  );
}
