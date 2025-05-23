import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { FcSearch } from "react-icons/fc";
import clearIcon from "./assets/clear.png";
import cloudIcon from "./assets/cloud.png";
import drizzleIcon from "./assets/drizzle.png";
import rainIcon from "./assets/rain.png";
import snowIcon from "./assets/snow.png";
import searchForCityIcon from "./assets/searchForCity.png";
import WeatherDetails from "./components/WeatherDetails";
import Loading from "./components/Loading";
import noCityFound from "./assets/noCityFound.png";

const App = () => {
  const [text, setText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [cityNotFound, setCityNotFound] = useState<boolean>(false);
  const [icon, setIcon] = useState<string>(searchForCityIcon);
  const [temp, setTemp] = useState<number>(999);
  const [city, setCity] = useState<string>("Search For City");
  const [country, setCountry] = useState<string>("IN");
  const [lat, setLat] = useState<number>(999);
  const [log, setLog] = useState<number>(999);
  const [humidity, setHumidity] = useState<number>(999);
  const [wind, setWind] = useState<number>(999);

  //Weather Icon Map
  const weatherMap = {
    "01d": clearIcon,
    "01n": clearIcon,
    "02d": cloudIcon,
    "02n": cloudIcon,
    "03d": drizzleIcon,
    "03n": drizzleIcon,
    "04d": drizzleIcon,
    "04n": drizzleIcon,
    "09d": rainIcon,
    "09n": rainIcon,
    "10d": rainIcon,
    "10n": rainIcon,
    "13d": snowIcon,
    "13n": snowIcon,
  };

  // Api key
  const apiKey = "8c288ee26aaeaa58dbe9eb3eb302094b";
  const search = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apiKey}&units=Metric`;

    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      if (data.cod === "404") {
        console.log("City not found");
        setCityNotFound(true);
        setLoading(false);
        return;
      }
      console.log(data);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setCity(data.name);
      setTemp(Math.floor(data.main.temp));
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLog(data.coord.lon);

      type WeatherIconCode = keyof typeof weatherMap;

      const weatherIconCode = data.weather[0].icon as WeatherIconCode;

      setIcon(weatherMap[weatherIconCode] || clearIcon);

      setCityNotFound(false);
      setLoading(false);

      console.log(data);
    } catch (error) {
      setCityNotFound(true);
      console.error("An error occurred:", (error as Error).message);
    } finally {
      setLoading(false);
    }
  };
  const handleCity = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      search();
    }
  };

  // If city not found
  {
    if (cityNotFound === true) {
      return (
        <div className="flex items-center justify-center w-screen h-screen ">
          <div className="card w-[300px] sm:w-[500px] h-[650px] bg-gradient-to-bl from-purple-950 to-blue-950 text-primary-content relative">
            <div className="flex justify-center px-4 pt-9 ">
              <input
                type="text"
                placeholder="Type here"
                className="w-full max-w-xs mr-4 input input-bordered input-secondary input-sm 2xl:input-lg"
                onChange={handleCity}
                value={text}
                onKeyDown={handleKeyDown}
              />

              <button className="text-xl btn btn-sm " onClick={() => search()}>
                <FcSearch />
              </button>
            </div>
            <div className="flex items-center justify-center h-screen flex-col">
              <img
                src={noCityFound}
                alt="no Result"
                className="rounded-3xl w-52 mb-6"
              />
              <div className="text-3xl font-bold text-yellow-500">
                CITY NOT FOUND!
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen ">
        <div className="card w-[300px] sm:w-[500px] h-[650px] bg-gradient-to-bl from-purple-950 to-blue-950 text-primary-content ">
          <div className="flex justify-center px-4 pt-9 ">
            <input
              type="text"
              placeholder="Type here"
              className="w-full max-w-xs mr-4 input input-bordered input-secondary input-sm 2xl:input-lg"
              onChange={handleCity}
              value={text}
              onKeyDown={handleKeyDown}
            />

            <button className="text-xl btn btn-sm" onClick={() => search()}>
              <FcSearch />
            </button>
          </div>
          {loading ? (
            <Loading />
          ) : (
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
          )}
          <p className="text-center text-[12px] text-gray-300 pb-3 ">
            Designed by <span className="text-yellow-500">Safwax</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
