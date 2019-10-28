import React from 'react';
import {shallow} from 'enzyme'
import { Client } from '../src/client';
import toJson from 'enzyme-to-json';

describe("Client", () => {
  test("should render", () => {
    // when
    const component = shallow(<Client />);

    // then
    expect(toJson(component)).toMatchSnapshot();
  });
});
