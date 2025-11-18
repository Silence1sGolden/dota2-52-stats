import { useEffect, useState } from "react";
import "./App.css";
import { Nav, type TFilter } from "./components/nav";
import { getDataApi } from "./api";
import type { TAverage } from "./models/PlayerStats";
import { Table } from "./components/Table";

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
