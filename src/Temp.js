import React, { useState, useEffect } from "react";
import "./App.css";

function Temp() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9eee0b5581251a120a2b635b27cf8e1c`
      );
      const resJson = await response.json();
      setCity(resJson.main)
    };
    fetchApi();
  },[search]);

  const inputHandle = (e) => {
    let data = e.target.value;
    setSearch(data);
  };

  return (
    <div className="card">
        <h1>Wheather App</h1>
      <input
        size="15"
        type="search"
        value={search}
        placeholder="Search"
        onChange={inputHandle}
      />

      {!city ? (
        (<p>No data Found</p>)
      ) : (
         <div>
          <h2>{search}</h2>
          <h2>{city.temp}°Cel</h2>
          <p>Max : {city.temp_max}°Cel | Min : {city.temp_min}°Cel</p>
        </div>
      )}
    </div>
  );
}

export default Temp;
