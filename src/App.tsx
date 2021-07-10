import React from "react";
import "./App.css";
import SearchAppBar from "./components/SearchAppBar";

import { FH4 } from "./data/FH4";
import EntryCard from "./components/EntryCard";
import { useRecoilState } from "recoil";
import { Entries } from "./Atoms";
import { MenuDrawer } from "./components/MenuDrawer";
import { AboutDialog } from "./components/AboutDialog";

const filterEntries = (searchText: string) =>
  FH4.filter(
    (car) =>
      car.Manufacturer.toLowerCase().includes(searchText) ||
      car.Model.toLowerCase().includes(searchText)
  );

function App() {
  const [entries, setEntries] = useRecoilState(Entries);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <SearchAppBar
        onSearchChange={(event) => {
          setEntries(filterEntries(event.currentTarget.value.toLowerCase()));
        }}
      />
      <main style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ minWidth: "50%", marginTop: "4rem" }}>
          {entries.map((car, index) => (
            <EntryCard
              manufacturer={car.Manufacturer}
              model={car.Model}
              price={car.Price}
              rarity={car.Rarity}
              type={car.Type}
              year={car.Year}
              key={index}
            />
          ))}
        </div>
      </main>
      <MenuDrawer />
      <AboutDialog />
    </div>
  );
}

export default App;
