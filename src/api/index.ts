import type { TPositions } from "../models/Game";
import type { IPlayer, TAverage } from "../models/PlayerStats";

type TApiReq = TPositions | "all" | "players";

const cashData = new Map<TApiReq, TAverage[]>();

export async function getDataApi(
  api: TApiReq
): Promise<(TAverage | IPlayer)[]> {
  if (cashData.has(api)) {
    return cashData.get(api)!;
  }

  return await fetch(`/${api}.json`)
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
