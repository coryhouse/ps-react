import React from 'react';
import renderer from 'react-test-renderer';
import PasswordInput from './PasswordInput';
import {shallow} from 'enzyme';

test('toggles input type when show/hide password clicked', () => {
  const wrapper = shallow(<PasswordInput
    htmlId="test"
    name="test"
    value=""
    onChange={() => {}}
    showVisibilityToggle
    />
  );

  // Password input should have a type of password initially
  expect(wrapper.find({type: 'password'})).toHaveLength(1); 
  expect(wrapper.find({type: 'text'})).toHaveLength(0);

  wrapper.find('a').simulate('click');

  // Password input should have a type of text after clicking toggle
  expect(wrapper.find({type: 'password'})).toHaveLength(0); 
  expect(wrapper.find({type: 'text'})).toHaveLength(1);  
});

test('hides password quality by default', () => {
  const tree = renderer.create(<PasswordInput
    htmlId="test"
    name="test"
    onChange={() => {}}
    value="Uisi38#8iad" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('shows password quality when enabled and a password is entered', () => {
  const tree = renderer.create(<PasswordInput
    htmlId="test"
    name="test"
    onChange={() => {}}
    showQuality
    value="Uisi38#8iad" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('hides password quality when enabled but no password is entered', () => {
  const tree = renderer.create(<PasswordInput
    htmlId="test"
    name="test"
    onChange={() => {}}
    showQuality
    value="" />).toJSON();
  expect(tree).toMatchSnapshot();
});
