import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../../components/Footer';

test('should correctly render Footer page', () => {
  const component = renderer.create(<Footer />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});