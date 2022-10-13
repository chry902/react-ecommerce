import { useState } from "react";

import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
// import { UnderNav } from "./components/underNav";
import { List } from "./components/list";

import "./App.css";
// ciao
function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const catSelection = (value) => {
    console.log("value", value);
    setCategory(value);
  };
  return (
    <div className="body">
      <Header setSearch={setSearch} search={search} />
      {/* <UnderNav /> */}
      <div className="flex_1">
        <Sidebar catSelection={catSelection} />
        <List category={category} search={search} />
      </div>
    </div>
  );
}

export default App;
