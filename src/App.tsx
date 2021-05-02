import React, { useState } from "react";
import "./App.css";
import SearchAppBar from "./components/SearchAppBar";

import { FH4 } from "./data/FH4";
import EntryCard from "./components/EntryCard";
import { Vehicle } from "./types/Vehicle";

function App() {
  const [entries, setEntries] = useState<Array<Vehicle>>(FH4);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <SearchAppBar
        onSearchChange={(event) => {
          setEntries(
            FH4.filter(
              (car) =>
                car.Manufacturer.toLowerCase().includes(
                  event.currentTarget.value.toLowerCase()
                ) ||
                car.Model.toLowerCase().includes(
                  event.currentTarget.value.toLowerCase()
                )
            )
          );
        }}
      />
      <main>
        {entries.map((car) => (
          <EntryCard
            manufacturer={car.Manufacturer}
            model={car.Model}
            price={car.Price}
            rarity={car.Rarity}
            type={car.Type}
            year={car.Year}
            key={`${car.Year} ${car.Manufacturer} ${car.Model}`}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
