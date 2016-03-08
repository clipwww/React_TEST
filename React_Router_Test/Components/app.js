var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;

var NavBar = require("./navbar")
var Home = require('./Home');
var PageB = require('./PageB');
var PageC = require('./PageC');
var NotFound = require('./NotFound');


var routes = (
  <Route path='/' handler={NavBar}>
    <Route name="B" path="PageB" handler={PageB}/>
    <Route name="C" path="PageC" handler={PageC}/>
    <NotFoundRoute handler={NotFound} />
    <DefaultRoute  handler={Home}/>
  </Route>
	);

Router.run(routes, Router.HashLocation, function(Root) {
    ReactDOM.render(<Root/>, document.getElementById('app'));
});
