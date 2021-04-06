import './App.css';
import Zephyr from './utils';
import React, { useState, useEffect } from "react";

function App() {
  const [filter, setFilter] = useState("");
  const [filteredZephyrs, setFilteredZephyrs] = useState(Zephyr);

  useEffect(() => {
    handleFilter();
  }, [filter])

  const handleFilter = () => {
    if (filter === 'standard' ) {
      setFilteredZephyrs(Zephyr.filter(zephyr => zephyr.type === "Standard"));
    } else if (filter === 'enhanced') {
      setFilteredZephyrs(Zephyr.filter(zephyr => zephyr.type === "Enhanced"));
    } else {
      setFilteredZephyrs(Zephyr);
    }


  }

  const handleDropdown = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="app">
      <form className="app__filter">
        <select name="filters" id="filters" onChange={handleDropdown}>
          <option value="all">All Zephyrs</option>
          <option value="standard">Standard Zephyrs</option>
          <option value="enhanced">Enhanced Zephyrs</option>
        </select>
      </form>

      <div className="app__rows">
        {filteredZephyrs.filter(zephyr => zephyr.currentlyOwned === true ).sort((a, b) => (a.type < b.type) ? 1 : -1).map((zehyr) => 
          <p className="app__row">
            {zehyr.name}, {zehyr.type}, {zehyr.batteryPercentage}%, {zehyr.NO2} NO₂, {zehyr.PM25} PM₂.₅
          </p>
        )}
      </div>
        
    </div>
  );
}

export default App;
