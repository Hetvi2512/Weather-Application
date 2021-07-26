import { AppActionTypes } from "../../actionTypes";

import { toggleDarkMode, toggleWeeklyHourly } from "./../appAction";

describe("toggleDarkMode", () => {
  it("check whether action has the correct type", () => {
    const action = toggleDarkMode();

    expect(action.type).toEqual(AppActionTypes.TOGGLE_DARK_MODE);
  });
});
describe("toggleWeeklyHourly", () => {
  it("check whether action has the correct type", () => {
    const action = toggleWeeklyHourly();

    expect(action.type).toEqual(AppActionTypes.TOGGLE_HOURLY_WEEKLY);
  });
});
