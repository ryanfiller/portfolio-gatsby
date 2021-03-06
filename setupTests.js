
//loadershim
global.___loader = {
  enqueue: jest.fn(),
}

import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { ThemeProvider } from 'styled-components'

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// globalstuff
const React = require('react')
const ReactDOMServer = require('react-dom/server')
global.React = React;
global.ReactDOMServer = ReactDOMServer;

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;

//styled-components
global.ThemeProvider = ThemeProvider
// import 'jest-styled-components';

// a11y tests
import { axe, toHaveNoViolations } from 'jest-axe';
global.axe = axe;
global.toHaveNoViolations = toHaveNoViolations;
// todo it'd be nice if this was global...
// import 'jest-axe/extend-expect';
// expect.extend(toHaveNoViolations)

import ContextMock from './__mocks__/context-mock'
global.ContextMock = ContextMock;