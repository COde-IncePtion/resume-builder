import React from "react";
import { shallow } from "enzyme/build";
import Title from "../title";

it("should render title", () => {
  const component = shallow(<Title text="demo text" fontSize="12px" />);
  expect(component.debug()).toMatchSnapshot();
});
