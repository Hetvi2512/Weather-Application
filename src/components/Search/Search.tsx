import React, { useEffect, useRef, useState } from "react";
import { AppStore } from "../../redux/store";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchCity,
  selectCityAction,
  fetchWeatherFail,
  fetchGeoLocation,
} from "../../redux/actions/weatherAction";

const Search = () => {
  const { OneCallCityData, error } = useSelector(
    (store: AppStore) => store.weather
  );
  const { hourly, isDarkMode } = useSelector((store: AppStore) => store.app);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    dispatch(fetchWeatherFail(""));
    if ("geolocation" in navigator) {
      // eslint-disable-next-line no-lone-blocks
      {
        navigator.geolocation.getCurrentPosition(function (position) {
          if (ifCityExists("My Location")) {
            return dispatch(selectCityAction("My Location"));
          }
          dispatch(
            fetchGeoLocation(
              position.coords.latitude,
              position.coords.longitude
            )
          );
        });
      }
    } else {
      dispatch(
        fetchWeatherFail("Geolocation is not supported by this browser")
      );
    }
  }, []);
  const fetchData = () => {
    if (searchTerm.length === 0) {
      return;
    }
    if (ifCityExists(searchTerm)) {
      return dispatch(selectCityAction(searchTerm));
    }
    dispatch(fetchCity(searchTerm));
  };

  return (
    <div className="w-4/5 md:w-3/5 lg:w-2/5 m-auto">
      <div className="flex flex-row mx-2 p-2 justify-start border-b border-green-300 dark:border-white">
        {isDarkMode ? (
          <>
            <input
              type="text"
              placeholder="Search for a location"
              onChange={onSearchInputChanged}
              name="City Name"
              className="w-full rounded p-2 w-48 md:w-96 mr-8  outline-none text-white bg-black"
              value={searchTerm}
            />
            <button
              name="submitBtn"
              className="bg-green-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4"
              onClick={fetchData}
            >
              <p id="search" className="font-semibold text-xs">
                Search
              </p>
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              name="City Name"
              placeholder="Search for a location"
              onChange={onSearchInputChanged}
              className="w-full rounded p-2 w-48 md:w-96 mr-8 outline-none "
              value={searchTerm}
            />
            <button
              id="submitBtn"
              className="bg-green-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4"
              onClick={fetchData}
            >
              <p id="<search>" className="font-semibold text-xs">
                Search
              </p>
            </button>
          </>
        )}
      </div>
      {typeof error !== "undefined" && searchTerm && searchTerm.length > 0 && (
        <h3 className="text-red-600">{error}</h3>
      )}
    </div>
  );
  function ifCityExists(name: string) {
    let isExist = false;
    for (let index = 0; index < OneCallCityData.length; index++) {
      let element = OneCallCityData[index];
      if (element.name.toLowerCase() === name.toLowerCase()) {
        isExist = true;
        break;
      }
    }
    return isExist;
  }
};

export default Search;
