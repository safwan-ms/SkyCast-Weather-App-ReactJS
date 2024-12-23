import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import clearIcon from "./assets/clear.png";
import cloudIcon from "./assets/cloud.png";
import drizzleIcon from "./assets/drizzle.png";
import humidityIcon from "./assets/humidity.png";
import rain from "./assets/rain.png";
import snowIcon from "./assets/snow.png";
import windIcon from "./assets/wind.png";
const WeatherDetails = ({
  icon,
  temp,
  city,
  country,
  lat,
  log,
  humidity,
  wind,
}) => {
  return (
    <div className="font-mono text-white">
      {/* Weather Icon */}
      <div className="flex justify-center">
        <img src={icon} className="h-[160px] w-[160px]" alt="Image" />
      </div>

      {/* Tempature */}
      <div className="m-1 mt-2 text-4xl font-normal text-center text-white uppercase">
        {temp}°C
      </div>

      {/* City */}
      <div className="text-4xl text-center  uppercase temp text-[#ffbc00] mt-1">
        {city}
      </div>

      {/* Country */}
      <div className="mt-2 text-4xl text-center uppercase countr1">
        {country}
      </div>

      {/* Latitude Longitude */}
      <div className="flex items-center justify-center gap-3 mt-2 mb-6">
        <div className="flex flex-col items-center justify-center">
          <span className="lat">latitude </span>
          <span>{lat}</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>longitude</span>
          <span>{log}</span>
        </div>
      </div>

      {/* Data-container */}
      <div className="flex justify-between p-6 data-container">
        <div className="text-center element">
          <img src={humidityIcon} alt="Humidity" className="w-12 h-12" />
          <div className="data">
            <div className="pt-1 text-lg font-bold humidity-percentage">
              {humidity}%
            </div>
            <div className="text-sm text ">Humidity</div>
          </div>
        </div>
        <div className="text-center element">
          <img src={windIcon} alt="Wind" className="w-12 h-12" />
          <div className="data">
            <div className="pt-1 text-lg font-bold wind-percentage">
              {wind}%
            </div>
            <div className="text-sm text ">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const App = () => {
  const [icon, setIcon] = useState(snowIcon);
  const [temp, setTemp] = useState(4);
  const [city, setCity] = useState("Chennai");
  const [country, setCountry] = useState("India");
  const [lat, setLat] = useState(0);
  const [log, setLog] = useState(0);
  const [humidity, setHumidity] = useState(85);
  const [wind, setWind] = useState(55);

  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen ">
        <div className="card w-[300px] sm:w-[500px]  bg-gradient-to-bl from-purple-950 to-blue-950 text-primary-content ">
          <div className="flex justify-center px-4 pt-9 ">
            <input
              type="text"
              placeholder="Type here"
              className="w-full max-w-xs mr-4 input input-bordered input-secondary input-sm 2xl:input-lg"
            />

            <button className="text-xl btn btn-sm ">
              <FcSearch />
            </button>
          </div>
          <WeatherDetails
            icon={icon}
            temp={temp}
            city={city}
            country={country}
            lat={lat}
            log={log}
            humidity={humidity}
            wind={wind}
          />
          <p className="text-center text-[12px] text-gray-300 pb-3 ">
            Designed by <span className="text-yellow-500">Safwax</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
