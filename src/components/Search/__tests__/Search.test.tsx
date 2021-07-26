import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { store } from "../../../redux/store";
import { mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { persistor } from "../../../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Search from "./../Search";
Enzyme.configure({ adapter: new Adapter() });

let wrapped: any;

beforeEach(() => {
  wrapped = mount(
    <Provider store={store}>
      <Search />
    </Provider>
  );
});

it("shows a Input field", () => {
  expect(wrapped.find("input").length).toEqual(1);
});

describe("the input field", () => {
  beforeEach(() => {
    wrapped.find("input").simulate("change", { target: { name: "City Name" } });
    wrapped.update();
  });

  it("has a field  that users can type in", () => {
    expect(wrapped.find("input").prop("name")).toEqual("City Name");
  });
});

describe("Proper placeholder", () => {
  beforeEach(() => {
    wrapped
      .find("input")
      .simulate("change", { target: { placeholder: "Search for a location" } });
    wrapped.update();
  });

  it("has placeholder", () => {
    expect(wrapped.find("input").prop("placeholder")).toEqual(
      "Search for a location"
    );
  });
});

it("Renders search button", () => {
  expect(wrapped.find("button").length).toEqual(1);
});
// it("Renders search button text", () => {
//   expect(wrapped.find("button").text).toEqual(<p>Search</p>);
// });

// it("sets hoveredOver state to true/fase from mouseenter and mouseleave events", () => {
//   fireEvent.mouseOver(window);
//   expect(wrapped.find("#submitBtn").getDOMNode()).toHaveStyle(
//     "background-color:bg-red-300"
//   );
// });

// it("shows a search text", () => {
//   expect(wrapped.findbyid("search").length).toEqual(1);
// });
