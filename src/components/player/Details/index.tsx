import { useEffect, useRef, useState } from "react";
import style from "./MorePlayerInfo.module.scss";
import { animate, createScope, Scope } from "animejs";
import type { TAverage } from "../../../models/PlayerStats";
import { StatElement } from "../../StatElement";

export function Details({ stats }: { stats: TAverage }) {
  const root = useRef<HTMLDivElement>(null);
  const scope = useRef<Scope>(null);
  const [showInfo, setShowInfo] = useState<boolean>(false);

  useEffect(() => {
    scope.current = createScope({ root }).add((self) => {
      self?.add("showInformation", (s) => {
        if (s) {
          animate(`.${style.details}`, {
            y: "0px",
            opacity: "1",
            height: "85px",
            padding: "10px 5px 5px",
          });
        } else {
          animate(`.${style.details}`, {
            y: "-85px",
            opacity: "0",
            height: "0px",
            padding: "0px 5px 0px",
          });
        }
      });
    });

    return () => scope.current!.revert();
  }, []);

  return (
    <>
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
      <div ref={root} className={style.root}>
        <div className={style.details}>
          <StatElement
            title="GPM"
            value={stats.goldPerMin}
            options={{ transcript: "Gold Per Minute" }}
          />
          <StatElement
            title="XPM"
            value={stats.xpPerMin}
            options={{ transcript: "Experince Per Minute" }}
          />
          <StatElement
            title="LH"
            value={stats.lastHits}
            options={{ transcript: "Last Hits" }}
          />
          <StatElement
            title="DN"
            value={stats.denies}
            options={{ transcript: "Denies" }}
          />
          <StatElement
            title="HD"
            value={stats.heroDamage}
            options={{ transcript: "Hero Damage" }}
          />
          <StatElement
            title="TD"
            value={stats.towerDamage}
            options={{ transcript: "Tower Damage" }}
          />
          <StatElement
            title="HH"
            value={stats.heroDamage}
            options={{ transcript: "Hero Healing" }}
          />
          <StatElement
            title="SG"
            value={stats.supGoldSpent}
            options={{ transcript: "Supports Gold" }}
          />
          <StatElement
            title="OB"
            value={stats.obsBuy}
            options={{ transcript: "Observers Buy" }}
          />
        </div>
      </div>
    </>
  );
}
