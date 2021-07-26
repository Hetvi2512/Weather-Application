import { AppActionTypes } from "../../actionTypes";
import { appReducer } from "../appReducers";

let initialState = {
  isDarkMode: false,
  hourly: false,
};

describe("app reducer", () => {
  //   it("returns the initial state", () => {
  //     expect(
  //       appReducer(undefined, { type: AppActionTypes, payload: any })
  //     ).toEqual(initialState);
  //   });
  it("handles dark mode", () => {
    expect(
      appReducer(initialState, {
        type: AppActionTypes.TOGGLE_DARK_MODE,
        payload: {},
      })
    ).toEqual({
      ...initialState,
      isDarkMode: true,
    });
  });

  it("handles hourly mode", () => {
    expect(
      appReducer(initialState, {
        type: AppActionTypes.TOGGLE_HOURLY_WEEKLY,
        payload: {},
      })
    ).toEqual({
      ...initialState,
      hourly: true,
    });
  });
});
