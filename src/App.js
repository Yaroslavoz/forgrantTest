import React, { useContext } from "react";
import "./styles/main.css";
import "./styles/style.css";
import Card from "./components/cardcomponent";
import { SourceContext } from "./SourceContext";

import { Select } from "./components/Select";

function App() {
  const source = useContext(SourceContext);
  return (
    <>
      <Select />
      <div className=" container w-3/4 mx-auto grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {source.map((it, index) => (
          <Card key={index} src={it.src} alt={it.name} title={it.name} />
        ))}
      </div>
    </>
  );
}

export default App;
