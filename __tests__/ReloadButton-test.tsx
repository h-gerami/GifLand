import React from 'react';
import renderer from 'react-test-renderer';
import {ReloadButton} from '../src/common';

test('renders correctly', () => {
  const tree = renderer
    .create(<ReloadButton onReloadButtonClickHandler={() => console.warn(2)} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
