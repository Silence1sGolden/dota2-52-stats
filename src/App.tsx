import { useEffect, useState } from "react";
import "./App.css";
import { Table } from "./components/table";
import { Nav, type TFilter } from "./components/nav";
import { getDataApi } from "./data/data";
import type { TAverage } from "./service";

function App() {
  const [filter, setFilter] = useState<TFilter>("all");
  const [data, setData] = useState<TAverage[]>([]);

  useEffect(() => {
    getDataApi(filter).then((data) => setData(data));
  }, [filter]);

  return (
    <main className="main">
      <Nav current={filter} onClick={(filter) => setFilter(filter)} />
      <Table average={data} />
    </main>
  );
}

export default App;
