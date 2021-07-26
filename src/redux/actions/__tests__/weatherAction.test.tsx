import { WeatherActionTypes } from "../../actionTypes";
import {
  deleteCityAction,
  selectCityAction,
  fetchWeatherFail,
  fetchWeatherStart,
} from "../weatherAction";

describe("deleteCityAction", () => {
  it("check whether action has the correct type", () => {
    const action = deleteCityAction("city");

    expect(action.type).toEqual(WeatherActionTypes.DELETE_CITY);
  });
});
describe("selectCityAction", () => {
  it("check whether action has the correct type", () => {
    const action = selectCityAction("city");

    expect(action.type).toEqual(WeatherActionTypes.SELECT_CITY);
  });
});
describe("fetchWeatherFail", () => {
  it("check whether action has the correct type", () => {
    const action = fetchWeatherFail("error");

    expect(action.type).toEqual(WeatherActionTypes.FETCH_WEATHER_ERROR);
  });
});
describe("fetchWeatherStart", () => {
  it("check whether action has the correct type", () => {
    const action = fetchWeatherStart();

    expect(action.type).toEqual(WeatherActionTypes.FETCH_WEATHER_START);
  });
});
