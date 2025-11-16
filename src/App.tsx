import { useState } from "react";
import "./App.css";
import { Table } from "./components/table";
import { Nav, type TFilter } from "./components/nav";
import type { TAverage } from "./service";
import { AVERAGE } from "./data/average";

function App() {
  const [filter, setFilter] = useState<TFilter>("all");

  const tierList: Record<TFilter, TAverage[]> = {
    all: AVERAGE,
    carry: [],
    hard_support: [],
    harder: [],
    support: [],
    mider: [],
  };

  return (
    <main className="main">
      <Nav current={filter} onClick={(filter) => setFilter(filter)} />
      <Table average={tierList[filter]} />
    </main>
  );
}

export default App;
