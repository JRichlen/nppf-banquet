import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from '../../src/components/header';

describe('Client', () => {
    test('should render', () => {
    // when
        const component = renderer.create(<Header/>);

        // then
        expect(component.toJSON()).toMatchSnapshot();
    });
});
