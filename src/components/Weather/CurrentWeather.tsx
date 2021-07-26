import { useSelector } from "react-redux";
import { AppStore } from "../../redux/store";

import moment from "moment";

const CurrentWeather = () => {
  const { selectedCity, error } = useSelector(
    (store: AppStore) => store.weather
  );

  const { isDarkMode } = useSelector((store: AppStore) => store.app);
  if (selectedCity)
    return (
      <div className="m-4">
        <div className="sm">
          <p className="tracking-wide text-2xl dark:text-white font-semibold">
            {selectedCity?.name}
          </p>
          <p
            className={
              isDarkMode
                ? "text-white tracking-wide"
                : "text-gray-500 dark:text-gray-400 tracking-wide"
            }
          >
            {moment().format("dddd")}, {moment().format("hh:mm")},
            {(selectedCity?.current.weather[0].description).toUpperCase()}
          </p>
        </div>
        <div className="flex flex-row justify-between my-8 lg:my-4 text-5xl lg:text-6xl tracking-wide">
          <span
            className={
              isDarkMode
                ? "mt-6 md:mt-10 text-white font-light"
                : "mt-6 md:mt-10 text-gray-500 dark:text-white font-light"
            }
          >
            {Math.round(selectedCity?.current.temp - 273.15)}&deg; C
            <span
              className={
                isDarkMode
                  ? "flex flex-col text-white font-normal tracking-wide text-base mt-1"
                  : "flex flex-col text-gray-500 dark:text-gray-400 font-normal tracking-wide text-base mt-1"
              }
            >
              Feels like {Math.round(selectedCity?.current.feels_like - 273.15)} 
              &deg;c
            </span>{" "}
          </span>
          <div>
            <img src={getIconUrl()} alt="weather" />
          </div>
        </div>
        <div className="text-indigo-700 dark:text-gray-400 mt-1">
          <span className="wi wi-strong-wind text-xl"></span>
          <span
            className={
              isDarkMode
                ? "ml-1 mr-2 text-white tracking-wide"
                : "ml-1 mr-2 text-gray-500 dark:text-white tracking-wide"
            }
          >
            {Math.round(selectedCity?.current.wind_speed * 3.6)} km/h winds
          </span>
          <span className="wi wi-humidity text-xl"></span>
          <span
            className={
              isDarkMode
                ? "ml-1 text-white tracking-wide"
                : "ml-1 text-gray-500 dark:text-white tracking-wide"
            }
          >
            {selectedCity?.current.humidity}% humidity
          </span>
        </div>
      </div>
    );
  return (
    <>
      <div></div>
    </>
  );
  function getIconUrl() {
    let iconcode = selectedCity?.current.weather[0].icon;

    let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    return iconurl;
  }
};

export default CurrentWeather;
