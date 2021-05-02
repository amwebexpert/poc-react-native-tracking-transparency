import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

import renderer from 'react-test-renderer';

it('renders correctly A', () => {
    // when
    const tree = renderer.create(<App />).toJSON();

    // then
    expect(tree).toMatchSnapshot();
});

it('renders correctly B', () => {
    // when
    const { toJSON } = render(<App />);

    // then
    expect(toJSON()).toMatchSnapshot();
});

it('Display welcome message', async () => {
    // given
    const { getByText } = render(<App />);

    // when
    const welcome = getByText("Welcome to unit tested app!");

    // then
    expect(welcome).toBeDefined();
});

