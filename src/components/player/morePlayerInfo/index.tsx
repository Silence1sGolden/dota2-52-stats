import { useEffect, useRef, useState } from "react";
import style from "./MorePlayerInfo.module.scss";
import { animate, createScope, Scope } from "animejs";
import type { TAverage } from "../../../service";

export function MorePlayerInfo({ stats }: { stats: TAverage }) {
  const root = useRef<HTMLDivElement>(null);
  const scope = useRef<Scope>(null);
  const [showInfo, setShowInfo] = useState<boolean>(false);

  useEffect(() => {
    scope.current = createScope({ root }).add((self) => {
      self?.add("showInformation", (s) => {
        if (s) {
          animate(`.${style.moreInfo}`, {
            y: "0px",
            opacity: "1",
            height: "85px",
          });
        } else {
          animate(`.${style.moreInfo}`, {
            y: "-80px",
            opacity: "0",
            height: "0px",
          });
        }
      });
    });

    return () => scope.current!.revert();
  }, []);

  return (
    <div ref={root} className="playerRoot">
      <div className={style.line}>
        <svg
          onClick={() => {
            setShowInfo((prev) => {
              const newState = !prev;

              scope.current?.methods.showInformation(newState);
              return newState;
            });
          }}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="9.00146"
            cy="9.00146"
            r="8.00146"
            fill="#0A0A0A"
            stroke="#272727"
            strokeWidth="2"
          />
          <rect
            style={showInfo ? { opacity: "0" } : {}}
            x="8"
            y="4"
            width="2"
            height="10"
            rx="1"
            fill="#272727"
          />
          <rect
            x="14"
            y="8"
            width="2"
            height="10"
            rx="1"
            transform="rotate(90 14 8)"
            fill="#272727"
          />
        </svg>
      </div>
      <div className={style.moreInfo}>
        <div className={style.popularHero}>
          <p className={style.title}>Best Heroes</p>
          <div className={style.heroList}>
            {stats.bestHeroes.map((item) => (
              <img
                className={style.hero}
                src={`https://cdn.steamstatic.com/apps/dota2/images/dota_react/heroes/${item}.png`}
                alt={item}
              />
            ))}
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>LH</th>
              <th>DN</th>
              <th>TD</th>
              <th>GPM</th>
              <th>XPM</th>
              <th>HH</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{stats.lastHits}</td>
              <td>{stats.denies}</td>
              <td>{stats.towerDamage}</td>
              <td>{stats.goldPerMin}</td>
              <td>{stats.xpPerMin}</td>
              <td>{stats.heroHealing}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
