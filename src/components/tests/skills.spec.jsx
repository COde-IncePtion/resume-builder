import React from "react";
import { shallow } from "enzyme/build";
import Skills from "../skills";

it("should render Skills", () => {
  const component = shallow(<Skills skills={["java", "react"]} />);
  expect(component.debug()).toMatchSnapshot();
});
