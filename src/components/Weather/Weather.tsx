import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../redux/store";
import { CgSearchLoading } from "react-icons/cg";
import {
  selectCityAction,
  fetchWeatherFail,
} from "../../redux/actions/weatherAction";

import WeatherCard from "./WeatherCards";

const Weather = () => {
  const { OneCallCityData, error, loading } = useSelector(
    (store: AppStore) => store.weather
  );
  const { isDarkMode } = useSelector((store: AppStore) => store.app);
  const dispatch = useDispatch();

  const fetchFavCity = (e: React.MouseEvent<HTMLLIElement>) => {
    const input = e.target as HTMLLIElement;
    dispatch(selectCityAction(input.innerText));
  };

  useEffect(() => {
    if (error) {
      dispatch(fetchWeatherFail("Cannot load weather for this place"));
    }
  }, [error]);

  if (OneCallCityData.length === 0)
    return (
      <h1 className=" text-lg font-extrabold text-black-900 mb-1">
        No search history found
      </h1>
    );

  let cities = new Set(OneCallCityData);

  let newCityArray = Array.from(cities);

  return (
    <>
      {loading && <CgSearchLoading />}
      <ul>
        <section className="lg:h-1/2 md:h-full flex items-center text-gray-600">
          <div className="container px-2 py-4 mx-auto">
            <h1
              className={
                isDarkMode
                  ? "text-lg font-extrabold text-white mb-1"
                  : "text-lg font-extrabold text-black-900 mb-1"
              }
            >
              Recently Searched
            </h1>
            <br />
            <div className="flex flex-row -m-4  overflow-scroll overflow-y-hidden">
              {newCityArray.map((weather, index) => {
                return (
                  <li key={index} onClick={fetchFavCity}>
                    <WeatherCard key={index} cityname={weather.name} />
                  </li>
                );
              })}
            </div>
          </div>
        </section>
      </ul>
    </>
  );
};

export default Weather;
