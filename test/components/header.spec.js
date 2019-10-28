import React from 'react';
import {shallow} from 'enzyme';
import { Header } from '../../src/components/header';
import toJson from 'enzyme-to-json';

describe("Client", () => {
  test("should render", () => {
    // when
    const component = shallow(<Header />);

    // then
    expect(toJson(component)).toMatchSnapshot();
  });
});
