import React from 'react';
import renderer from 'react-test-renderer';
import MenuComponent from '../../components/MenuComponent';

test('should correctly render Single page', () => {
  const component = renderer.create(<MenuComponent />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
