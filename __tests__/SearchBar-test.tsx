import React from 'react';
import renderer from 'react-test-renderer';
import {SearchBar} from '../src/common';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <SearchBar
        setSearchedText={t => console.warn(t)}
        isSearchBarFocused={false}
        searchedText={''}
        setIsSearchBarFocused={() => console.warn('')}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
