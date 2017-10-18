import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('should render Header correctly', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Header />);
  // on second run compare with existing one
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
