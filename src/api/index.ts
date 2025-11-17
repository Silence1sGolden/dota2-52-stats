import type { TFilter } from "../components/nav";
import type { IPlayer } from "../models/PlayerStats";
import type { TAverage } from "../service";

const baseURL = "http://localhost:5173/";
const cashData = new Map<TFilter | "players", TAverage[]>();

export async function getDataApi(
  api: TFilter | "players"
): Promise<(TAverage | IPlayer)[]> {
  if (cashData.has(api)) {
    return cashData.get(api)!;
  }

  return await fetch(`${baseURL}/${api}.json`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      cashData.set(api, data);
      return data;
    });
}
