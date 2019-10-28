import React from "react";
import renderer from "react-test-renderer";
import { Client } from "../src/client";

describe("Client", () => {
  test("should render", () => {
    // when
    const component = renderer.create(<Client />);

    // then
    expect(component.toJSON()).toMatchSnapshot();
  });
});
