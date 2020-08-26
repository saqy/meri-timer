import React, { useEffect, useState } from "react";

import "./App.css";
import { Timer } from "./components/Timer";

import bgGif from "./bg-gif.gif";
import bgImage from "./bg.jpg";
import bgRain from "./bg-rain.gif";

function App() {
const [currentWeather, setCurrentWeather] = useState('');
  useEffect(() => {
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Crowland,uk", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "25b0a0ce6cmsh33e0bd0d7ac1419p1156b7jsnfc13da3d6352"
      }
    })
    .then(response => {
      return response.json()
    
    })
    .then(response=>{
      console.log(response);
      if (response.weather){
        setCurrentWeather(response.weather[0].main);
      }
    })
    .catch(err => {
      console.log(err);
    });
  });
  return (
    <div className="app" style={{backgroundImage:currentWeather==='Rain'?  `url(${bgRain})`:  `url(${bgGif})`}}>
      <Timer initialTime={new Date("2020-11-01T15:42:16.420Z")} />
    </div>
  );
}

export default App;