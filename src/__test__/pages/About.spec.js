import React from 'react';
import renderer from 'react-test-renderer';
import About from '../../components/About';

test('should correctly render Single page', () => {
  const component = renderer.create(<About />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});