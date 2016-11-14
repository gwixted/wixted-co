var React = require('react');
var ReactDOM = require('react-dom');

import Projects from './components/Projects';
var routes = require('./config/routes');

ReactDOM.render(
  routes,
  document.querySelector('.app')
);
