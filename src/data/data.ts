import type { TFilter } from "../components/nav";
import type { TAverage } from "../service";

const baseURL = "http://localhost:5173/";
const cashData = new Map<TFilter, TAverage[]>();

export async function getDataApi(api: TFilter): Promise<TAverage[]> {
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
