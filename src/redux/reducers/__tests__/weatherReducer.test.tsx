import { WeatherActionTypes } from "../../actionTypes";
import { weatherReducer } from "../weatherReducer";

let initialState = {
  OneCallCityData: [],
  error: undefined,
  selectedCity: undefined,
  loading: false,
};

describe("weather reducer", () => {
  it("handles fetch weather start", () => {
    expect(
      weatherReducer(initialState, {
        type: WeatherActionTypes.FETCH_WEATHER_START,
        payload: {},
      })
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("handles fetch weather success", () => {
    expect(
      weatherReducer(initialState, {
        type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
        payload: "city",
      })
    ).toEqual({
      ...initialState,
      OneCallCityData: [...initialState.OneCallCityData, "city"],
      loading: false,
    });
  });

  it("handles fetch weather fail", () => {
    expect(
      weatherReducer(initialState, {
        type: WeatherActionTypes.FETCH_WEATHER_ERROR,
        payload: "invalid",
      })
    ).toEqual({
      ...initialState,
      loading: false,
      error: "invalid",
    });
  });

  it("handles select city", () => {
    expect(
      weatherReducer(initialState, {
        type: WeatherActionTypes.SELECT_CITY,
        payload: "cityname",
      })
    ).toEqual({
      ...initialState,
      loading: false,
      selectedCity: initialState.OneCallCityData.find(
        (city) => city === "cityname"
      ),
    });
  });

  it("handles delete city", () => {
    expect(
      weatherReducer(initialState, {
        type: WeatherActionTypes.DELETE_CITY,
        payload: "cityname",
      })
    ).toEqual({
      OneCallCityData: [],
      error: undefined,
      selectedCity: undefined,
      loading: false,
    });
  });
});
