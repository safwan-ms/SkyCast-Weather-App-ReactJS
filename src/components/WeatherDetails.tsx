import windIcon from "../assets/wind.png";
import humidityIcon from "../assets/humidity.png";
interface WeatherDetailsProps {
  icon: string;
  temp: number;
  city: string;
  country: string;
  lat: number;
  log: number;
  wind: number;
  humidity: number;
}
const WeatherDetails = ({
  icon,
  temp,
  city,
  country,
  lat,
  log,
  humidity,
  wind,
}: WeatherDetailsProps) => {
  return (
    <div className="font-mono text-white">
      {/* Weather Icon */}
      <div className="flex justify-center mt-3 ">
        <img
          src={icon}
          className="h-[160px] w-[160px] rounded-2xl"
          alt="Image"
        />
      </div>

      {/* Tempature */}
      <div className="m-1 mt-2 text-4xl font-normal text-center text-white uppercase">
        {temp}°C
      </div>

      {/* City */}
      <div className="text-4xl text-center  uppercase temp text-[#ffbc00] mt-1 font-bold">
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
              {wind} km/h
            </div>
            <div className="text-sm text ">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
