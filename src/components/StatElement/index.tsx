import clsx from "clsx";
import style from "./StatElement.module.scss";

export function StatElement({
  title,
  value,
  options,
}: {
  title: string;
  value: number;
  options?: {
    transcript?: string;
    best?: boolean;
  };
}) {
  return (
    <div className={style.stat}>
      <p className={style.title} title={options?.transcript}>
        {title}
      </p>
      <span className={clsx(style.value, options?.best && style.best)}>
        {value}
      </span>
    </div>
  );
}
