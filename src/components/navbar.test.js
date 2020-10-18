import { shallow, mount, render} from 'enzyme'; 
import React from 'react';
import NavBar from './navBar';

it('expect to render Navbar component', () => {
  expect(shallow(<NavBar />)).toMatchSnapshot();
})

