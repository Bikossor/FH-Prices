import React from "react";
import "./App.css";
import SearchAppBar from "./components/SearchAppBar";

import { FH4 } from "./data/FH4";
import EntryCard from "./components/EntryCard";
import { useRecoilState, useRecoilValue } from "recoil";
import { Entries, EntryFilterAtom } from "./Atoms";
import { MenuDrawer } from "./components/MenuDrawer";
import { AboutDialog } from "./components/AboutDialog";
import { useEffect } from "react";

const filterEntries = (searchText: string) =>
  FH4.filter(
    (car) =>
      car.Manufacturer.toLowerCase().includes(searchText) ||
      car.Model.toLowerCase().includes(searchText)
  );

function App() {
  const [entries, setEntries] = useRecoilState(Entries);
  const { searchText } = useRecoilValue(EntryFilterAtom);

  useEffect(() => {
    setEntries(filterEntries(searchText.toLowerCase()));
  }, [searchText])

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <SearchAppBar />
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
