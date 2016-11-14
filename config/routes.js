var React = require('react');
var ReactRouter = require('react-router');
// router variables
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
// components
var Main = require('../components/Main');
var Home = require('../components/Home');
var Projects = require('../components/Projects');

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="/projects" component={Projects} />
    </Route>
  </Router>
);

module.exports = routes;
