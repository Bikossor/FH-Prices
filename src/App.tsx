import React from 'react';
import './App.css';
import SearchAppBar from './components/SearchAppBar';

import { FH4 } from "./data/FH4";
import EntryCard from './components/EntryCard';

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <SearchAppBar />
      <main>
        {FH4.map(car => 
          <EntryCard
            manufacturer={car.Manufacturer}
            model={car.Model}
            price={car.Price}
            rarity={car.Rarity}
            type={car.Type}
            year={car.Year}
            key={`${car.Year} ${car.Manufacturer} ${car.Model}`}
          />
        )}
      </main>
    </div>
  );
}

export default App;
