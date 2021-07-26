import { useSelector, useDispatch } from "react-redux";
import Search from "./components/Search/Search";
import Navbar from "./components/NavBar";
import Weather from "./components/Weather/Weather";
import CurrentWeather from "./components/Weather/CurrentWeather";
import WeeklyWeather from "./components/Weather/WeeklyWeather";
import HourlyWeather from "./components/Weather/HourlyWeather";

import { toggleWeeklyHourly } from "./redux/actions/appAction";
import { AppStore } from "./redux/store";
import "./App.css";
function App() {
  const { hourly, isDarkMode } = useSelector((store: AppStore) => store.app);

  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />

      <main
        className={isDarkMode ? "bg-black text-white" : "bg-white text-black"}
      >
        <div className="mx-auto w-5/6 md:w-full 2xl:max-w-7xl xl:max-w-6xl">
          <div className="text-center mb-12">
            <h3
              className={
                isDarkMode
                  ? "bg-black text-white  text-5xl md:text-4xl font-semibold"
                  : "bg-white text-black  text-5xl md:text-4xl font-semibold"
              }
            >
              Choose a city or search
            </h3>
          </div>
          <Search />
          <div className="shadow-lg rounded-lg h-auto overflow-hidden w-full md:w-3/5 lg:w-1/2 m-auto mt-4 ">
            <CurrentWeather />

            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-black border-4 appearance-none cursor-pointer"
                onClick={() => {
                  dispatch(toggleWeeklyHourly());
                }}
              />
              <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>
            <label className="text-lg text-black-700">
              {hourly ? "Hourly Data" : "Weekly Data"}
            </label>
            {hourly ? <HourlyWeather /> : <WeeklyWeather />}

            <Weather />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
