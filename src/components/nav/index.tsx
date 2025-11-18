import clsx from "clsx";
import style from "./Nav.module.scss";

export type TFilter =
  | "all"
  | "carry"
  | "mider"
  | "support"
  | "harder"
  | "hard_support";

export function Nav({
  current,
  onClick,
}: {
  current: TFilter;
  onClick: (filter: TFilter) => void;
}) {
  const onClickButton = (filter: TFilter) => {
    onClick(filter);
  };

  return (
    <nav className={style.nav}>
      <button
        onClick={() => onClickButton("all")}
        className={clsx(style.button, current === "all" && style.current)}
      >
        All
      </button>
      <button
        onClick={() => onClickButton("carry")}
        className={clsx(style.button, current === "carry" && style.current)}
      >
        Carry
      </button>
      <button
        onClick={() => onClickButton("mider")}
        className={clsx(style.button, current === "mider" && style.current)}
      >
        Mider
      </button>
      <button
        onClick={() => onClickButton("harder")}
        className={clsx(style.button, current === "harder" && style.current)}
      >
        Harder
      </button>
      <button
        onClick={() => onClickButton("support")}
        className={clsx(style.button, current === "support" && style.current)}
      >
        Support
      </button>
      <button
        onClick={() => onClickButton("hard_support")}
        className={clsx(
          style.button,
          current === "hard_support" && style.current
        )}
      >
        Hard Support
      </button>
    </nav>
  );
}
