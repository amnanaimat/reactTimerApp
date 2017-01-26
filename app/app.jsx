var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

//loader Founcdation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();
//App Custom CSS
require('style!css!sass!ApplicationCustomStyle');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
	<IndexRoute   component={Timer}/>
	<Route  path="Countdown" component={Countdown}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
