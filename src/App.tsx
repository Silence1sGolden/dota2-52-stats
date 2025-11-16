import { useState } from "react";
import "./App.css";
import { Table } from "./components/table";
import { Nav } from "./components/nav";

function App() {
  const [filter, setFilter] = useState<
    "all" | "carry" | "mider" | "support" | "harder" | "hard_support"
  >("all");

  return (
    <main className="main">
      <Nav current={filter} onClick={(filter) => setFilter(filter)} />
      <Table />
    </main>
  );
}

export default App;
