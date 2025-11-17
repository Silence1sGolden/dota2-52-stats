import { useEffect, useState } from "react";
import "./App.css";
import { Table } from "./components/table";
import { Nav, type TFilter } from "./components/nav";
import { getDataApi } from "./api";
import type { TAverage } from "./models/PlayerStats";

function App() {
  const [filter, setFilter] = useState<TFilter>("all");
  const [data, setData] = useState<TAverage[]>([]);

  useEffect(() => {
    getDataApi(filter).then((data) => setData(data as TAverage[]));
  }, [filter]);

  return (
    <main className="main">
      <Nav current={filter} onClick={(filter) => setFilter(filter)} />
      <Table average={data} />
    </main>
  );
}

export default App;
