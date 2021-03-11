import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });
describe('App component testing', function() {
  it('renders welcome message', function() {
    const wrapper = shallow(<App />); 
    const welcome = <Fragment>Você precisa habilitar a localização no browser o/</Fragment>;
    expect(wrapper.contains(welcome)).to.equal(true);
  });
});