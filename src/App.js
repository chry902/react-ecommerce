import { useState } from "react";

import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { UnderNav } from "./components/underNav";
import { List } from "./components/list";

import "./App.css";

function App() {
  const [category, setCategory] = useState("");

  const catSelection = (value) => {
    console.log(value);
    setCategory(value)
  }
  return (
    <div className="body">
      <Header />
      <UnderNav />
      <div className="flex_1">
        <Sidebar catSelection={catSelection} />
        <List category={category} />
      </div>
    </div>
  );
}

export default App;