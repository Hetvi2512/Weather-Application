import { useSelector } from "react-redux";
import { AppStore } from "../../redux/store";

import moment from "moment";

const WeeklyWeather = () => {
  const { selectedCity, error } = useSelector(
    (store: AppStore) => store.weather
  );
  const { isDarkMode } = useSelector((store: AppStore) => store.app);
  if (selectedCity)
    return (
      <div className="m-4">
        <div className="">
          {selectedCity.daily.map((item, index) => {
            return (
              <ul className="mt-4" key={index}>
                <li className={isDarkMode ?"flex flex-row text-white p-1":"flex flex-row text-gray-500 dark:text-white p-1"}>
                  <span className="flex-1 text-left">
                    {moment(item.dt * 1000).format("dddd")}
                  </span>
                  <span className="text-indigo-700 dark:text-white text-2xl">
                    <img src={getIconUrl(item.weather[0].icon)} />
                  </span>
                  <span className="flex-1 text-right">
                    {Math.round(item.temp.min - 273.15)}&deg;
                    /{Math.round(item.temp.max - 273.15)}
                    &deg;
                   
                  </span>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    );
  return (
    <>
      <div></div>
    </>
  );
  function getIconUrl(iconcode: string) {
    let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    return iconurl;
  }
};

export default WeeklyWeather;
